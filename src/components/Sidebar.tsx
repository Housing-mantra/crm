import React, { useState } from 'react';
import { LayoutDashboard, Users, Home, Calendar, FileText, LogOut, Menu, X, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
    onNavigate?: (page: string) => void;
    activePage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activePage = 'dashboard' }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (page: string, e: React.MouseEvent) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(page);
        }
        setIsMobileOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        // Force a full page reload to ensure auth state is reset and App re-mounts
        window.location.href = '/';
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 md:relative md:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white shadow-md shadow-blue-200">
                        <Home size={20} />
                    </div>
                    <h1 className="text-slate-800 text-lg font-bold tracking-tight">Real Estate CRM</h1>
                </div>

                <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
                    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activePage === 'dashboard' ? 'bg-blue-50 text-primary shadow-sm ring-1 ring-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`} onClick={(e) => handleNavClick('dashboard', e)}>
                        <LayoutDashboard size={20} className={activePage === 'dashboard' ? 'text-primary' : ''} />
                        <span className="text-sm font-medium">Dashboard</span>
                    </button>

                    {/* New Data Menu */}
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Database size={20} />
                        <span className="text-sm font-medium">Data</span>
                    </a>

                    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activePage === 'leads' ? 'bg-blue-50 text-primary shadow-sm ring-1 ring-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`} onClick={(e) => handleNavClick('leads', e)}>
                        <Users size={20} className={activePage === 'leads' ? 'text-primary' : ''} />
                        <span className="text-sm font-medium">Leads</span>
                    </button>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Home size={20} />
                        <span className="text-sm font-medium">Properties</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Calendar size={20} />
                        <span className="text-sm font-medium">Calendar</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <FileText size={20} />
                        <span className="text-sm font-medium">Reports</span>
                    </a>
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="h-10 w-10 rounded-full bg-cover bg-center border border-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu_7q6YFd7a1Phk0IWcojbXEOyyypJhnEFuvR0q6K9FBldFRGqUeZkH5yDxPpW-GlkmFQ0kgcOUgMwk3jcqY23Twosnb5eKlMuSxbjWkBdT2Zz4SRvREqHeAOFcVzvY-hTERwdBhr374pP_dmK90iRjEqr4m84gXIydSHwN_Erc4ZYmXf6A_JYlVNWFs4dwmUDpqFWQTJcr-FJ75xHh9HSbFDjTcf1wsYktmvL6dbQ0r-leYKsSO_DS8wH8pMK9in9algqGs9mXqvf')" }}></div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-slate-800 text-sm font-medium truncate">Sarah Jenkins</p>
                            <p className="text-slate-500 text-xs truncate">Presales Agent</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="mt-2 w-full flex items-center justify-center gap-2 text-slate-400 hover:text-slate-700 text-xs py-2 transition-colors"
                    >
                        <LogOut size={16} />
                        Log Out
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
