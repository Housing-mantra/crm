import React from 'react';
import { Download, Plus, TrendingUp, TrendingDown, Hourglass, CheckCircle, Search, Clock, History, AlertTriangle, UserPlus, PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import API_BASE_URL from '../config';
import AddLeadModal from '../components/AddLeadModal';
import SalesFunnel from '../components/SalesFunnel';

const Dashboard: React.FC = () => {
    const [leads, setLeads] = React.useState<any[]>([]);
    const [isAddLeadModalOpen, setIsAddLeadModalOpen] = React.useState(false);

    const fetchLeads = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/leads`);
            if (response.ok) {
                const data = await response.json();
                setLeads(data);
            }
        } catch (error) {
            console.error('Error fetching leads:', error);
        }
    };

    const leadSourceData = React.useMemo(() => {
        const sources: { [key: string]: number } = {
            'Landing Page': 0,
            'Facebook': 0,
            'Manual': 0,
            'Others': 0
        };

        leads.forEach((lead: any) => {
            const source = (lead.source || 'Others').toLowerCase();
            if (source.includes('landing')) sources['Landing Page']++;
            else if (source.includes('facebook') || source.includes('fb')) sources['Facebook']++;
            else if (source.includes('manual')) sources['Manual']++;
            else sources['Others']++;
        });

        return Object.keys(sources).map(key => ({
            name: key,
            value: sources[key]
        })).filter(item => item.value > 0);
    }, [leads]);

    const PIE_COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#64748B'];

    React.useEffect(() => {
        fetchLeads();
        // Poll every 30 seconds to update leads
        const interval = setInterval(fetchLeads, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="h-16 flex items-center justify-between px-8 bg-white border-b border-slate-200 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900">Dashboard</h2>
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex h-9 items-center justify-center gap-2 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                        <Download size={18} />
                        Export Report
                    </button>
                    <button className="flex h-9 items-center justify-center gap-2 px-3 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors"
                        onClick={() => setIsAddLeadModalOpen(true)}>
                        <Plus size={18} />
                        Add New Lead
                    </button>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">{leads.length}</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 0%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Qualified Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">0</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 0%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Conversion Rate</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">0%</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 0%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Calls Made Today</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">0</p>
                            <span className="text-orange-600 text-xs font-bold bg-orange-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-orange-100">
                                <TrendingDown size={14} /> 0%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                            <Hourglass className="text-slate-400" size={24} />
                            Lead Response Status
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Newly Created</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">{leads.length}</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <CheckCircle size={24} />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-indigo-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Created ≤ 1 days</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Clock size={24} />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-amber-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Created 1-3 days</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    <History size={24} />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-rose-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Created {'>'} 3 days</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">0</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                    <AlertTriangle size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                            <PieChartIcon className="text-slate-400" size={24} />
                            Lead Sources
                        </h3>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center h-[300px]">
                            {leadSourceData.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={leadSourceData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {leadSourceData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm gap-2">
                                    <PieChartIcon size={32} className="opacity-20" />
                                    <p>No lead source data</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <SalesFunnel />
                        <div className="flex items-center justify-between">
                            <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                                <CheckCircle className="text-slate-400" size={24} />
                                Pending Tasks
                                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-bold">0</span>
                            </h3>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-8 text-center text-slate-500 text-sm">
                            No pending tasks
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                                <UserPlus className="text-slate-400" size={24} />
                                New Leads
                            </h3>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1">
                            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="text-slate-400" size={18} />
                                    </div>
                                    <input className="w-full pl-9 pr-4 py-2 rounded-md border border-slate-200 bg-white text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Filter new leads..." type="text" />
                                </div>
                            </div>
                            <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto custom-scrollbar">
                                <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto custom-scrollbar">
                                    {leads.map((lead: any) => (
                                        <div key={lead._id || lead.id} className="p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold ring-1 ring-slate-100">
                                                    {lead.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                                                </div>
                                                <div className="flex-1 overflow-hidden">
                                                    <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">{lead.name}</p>
                                                    <p className="text-[10px] text-slate-500 truncate">{lead.type} • Budget {lead.budget}</p>
                                                    <p className="text-[9px] text-slate-400">Via {lead.source}</p>
                                                </div>
                                                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">New</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className="w-full p-2 text-xs text-center text-slate-500 hover:text-slate-700 bg-slate-50 border-t border-slate-100 transition-colors">
                                View all leads
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Lead Modal */}
            <AddLeadModal
                isOpen={isAddLeadModalOpen}
                onClose={() => setIsAddLeadModalOpen(false)}
                onSuccess={fetchLeads}
            />
        </main>
    );
};

export default Dashboard;
