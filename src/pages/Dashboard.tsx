import React from 'react';
import { Download, Plus, TrendingUp, TrendingDown, Hourglass, CheckCircle, Phone, Mail, Calendar as CalendarIcon, PersonStanding, Search, Clock, History, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="flex-shrink-0 z-10 bg-white border-b border-slate-200 pt-24 md:pt-0">
                <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-4 p-6">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Dashboard</h2>
                        <p className="text-slate-500 text-sm">Overview of your real estate operations and daily tasks.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
                        <button className="flex h-10 items-center justify-center gap-2 px-4 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto">
                            <Download size={18} />
                            Export Report
                        </button>
                        <button className="flex h-10 items-center justify-center gap-2 px-4 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200 w-full sm:w-auto">
                            <Plus size={18} />
                            Add New Lead
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-3">
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">1,240</p>
                            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                                <TrendingUp size={14} /> 5%
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-3">
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Qualified Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">315</p>
                            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                                <TrendingUp size={14} /> 2%
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-3">
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Conversion Rate</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">12.5%</p>
                            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                                <TrendingUp size={14} /> 1.5%
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-3">
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Calls Made Today</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">48</p>
                            <span className="flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full border border-rose-100">
                                <TrendingDown size={14} /> 10%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Lead Response Status */}
                <div className="mb-8">
                    <h3 className="flex items-center gap-2 text-slate-800 text-base font-bold mb-4">
                        <Hourglass className="text-slate-400" size={20} />
                        Lead Response Status
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-blue-600 text-xs font-medium uppercase tracking-wide mb-1">Newly Created</p>
                                <p className="text-2xl font-bold text-blue-900">12</p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                <PersonStanding size={20} />
                            </div>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-indigo-600 text-xs font-medium uppercase tracking-wide mb-1">Created ≤ 1 days</p>
                                <p className="text-2xl font-bold text-indigo-900">8</p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <Clock size={20} />
                            </div>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-amber-600 text-xs font-medium uppercase tracking-wide mb-1">Created 1-3 days</p>
                                <p className="text-2xl font-bold text-amber-900">15</p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                                <History size={20} />
                            </div>
                        </div>
                        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-rose-600 text-xs font-medium uppercase tracking-wide mb-1">Created {'>'} 3 days</p>
                                <p className="text-2xl font-bold text-rose-900">5</p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                                <AlertTriangle size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                    {/* Pending Tasks */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-slate-400" size={18} />
                                <h3 className="font-bold text-slate-800">Pending Tasks</h3>
                            </div>
                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">5</span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {[1, 2, 3].map((task) => (
                                <div key={task} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-3">
                                    <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${task === 1 ? 'bg-blue-50 text-blue-600' : task === 2 ? 'bg-purple-50 text-purple-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                        {task === 1 ? <Phone size={16} /> : task === 2 ? <Mail size={16} /> : <CalendarIcon size={16} />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-sm font-medium text-slate-900 truncate">
                                                {task === 1 ? 'Call Inquiry: Michael Scott' : task === 2 ? 'Send Brochure: Anna Lee' : 'Site Visit: The Heights'}
                                            </p>
                                            {task === 1 && <span className="bg-red-50 text-red-600 text-[10px] font-medium px-1.5 py-0.5 rounded border border-red-100">Overdue 15m</span>}
                                        </div>
                                        <p className="text-xs text-slate-500 mb-2">
                                            {task === 1 ? 'Interested in 3BHK downtown • Added today' : task === 2 ? 'Requested floor plans for Project A' : 'Scheduled for tomorrow at 11:00 AM'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
                            <button className="text-primary text-sm font-medium hover:text-blue-700 transition-colors">View All Tasks</button>
                        </div>
                    </div>

                    {/* New Leads */}
                    <div className="lead-item">
                        <div className="lead-avatar-initials purple">AL</div>
                        <div className="lead-info">
                            <p className="lead-name">Anna Lee</p>
                            <p className="lead-sub">Villa • Budget $1.2M</p>
                        </div>
                        <span className="pill pill-blue">New</span>
                    </div>
                    <div className="lead-item">
                        <div className="lead-avatar-initials teal">RJ</div>
                        <div className="lead-info">
                            <p className="lead-name">Rajesh Jain</p>
                            <p className="lead-sub">Plot • Budget $200k</p>
                        </div>
                        <span className="pill pill-blue">New</span>
                    </div>
                </div>
                <button className="btn-full">View all 12 new leads</button>
            </div>
        </div>
                </div >
            </div >
        </div >
    );
};

export default Dashboard;
