import React, { useState } from 'react';
import { LayoutDashboard, Users, Home, Calendar, FileText, LogOut, Building2, Menu, X } from 'lucide-react';
import '../styles/Sidebar.css';

interface SidebarProps {
    onNavigate?: (page: string) => void;
    activePage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activePage = 'dashboard' }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleNavClick = (page: string, e: React.MouseEvent) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(page);
        }
        setIsMobileOpen(false); // Close mobile menu after navigation
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-container">
                        <Building2 className="logo-icon" size={24} />
                    </div>
                    <h1 className="app-title">Real Estate CRM</h1>
                </div>

                <nav className="sidebar-nav">
                    <a href="#" className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`} onClick={(e) => handleNavClick('dashboard', e)}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className={`nav-item ${activePage === 'leads' ? 'active' : ''}`} onClick={(e) => handleNavClick('leads', e)}>
                        <Users size={20} />
                        <span>Leads Pipeline</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Home size={20} />
                        <span>Properties</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Calendar size={20} />
                        <span>Calendar</span>
                    </a>
                    <a href="#" className="nav-item">
                        <FileText size={20} />
                        <span>Reports</span>
                    </a>
                </nav>

                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu_7q6YFd7a1Phk0IWcojbXEOyyypJhnEFuvR0q6K9FBldFRGqUeZkH5yDxPpW-GlkmFQ0kgcOUgMwk3jcqY23Twosnb5eKlMuSxbjWkBdT2Zz4SRvREqHeAOFcVzvY-hTERwdBhr374pP_dmK90iRjEqr4m84gXIydSHwN_Erc4ZYmXf6A_JYlVNWFs4dwmUDpqFWQTJcr-FJ75xHh9HSbFDjTcf1wsYktmvL6dbQ0r-leYKsSO_DS8wH8pMK9in9algqGs9mXqvf')" }}></div>
                        <div className="user-info">
                            <p className="user-name">Sarah Jenkins</p>
                            <p className="user-role">Presales Agent</p>
                        </div>
                    </div>
                    <button className="logout-btn">
                        <LogOut size={16} />
                        Log Out
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
