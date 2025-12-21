import React from 'react';
import { Download, Plus, TrendingUp, TrendingDown, Hourglass, CheckCircle, Phone, Mail, Calendar as CalendarIcon, PersonStanding, Search, Clock, History, AlertTriangle, UserPlus, PieChart } from 'lucide-react';

const Dashboard: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="flex-shrink-0 z-10 bg-white border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4 p-6">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Dashboard</h2>
                        <p className="text-slate-500 text-sm">Overview of your real estate operations and daily tasks.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:flex h-10 items-center justify-center gap-2 px-4 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                            <Download size={20} />
                            Export Report
                        </button>
                        <button className="flex h-10 items-center justify-center gap-2 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">
                            <Plus size={20} />
                            Add New Lead
                        </button>
                    </div>
                </div>
            </header>
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">1,240</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 5%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Qualified Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">315</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 2%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Conversion Rate</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">12.5%</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 1.5%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Calls Made Today</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">48</p>
                            <span className="text-orange-600 text-xs font-bold bg-orange-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-orange-100">
                                <TrendingDown size={14} /> 10%
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
                                    <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <CheckCircle size={24} />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-indigo-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Created ≤ 1 days</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Clock size={24} />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-amber-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Created 1-3 days</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">15</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    <History size={24} />
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-rose-300 transition-colors">
                                <div className="flex flex-col">
                                    <p className="text-slate-500 text-xs font-medium">Created {'>'} 3 days</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-1">5</p>
                                </div>
                                <div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                    <AlertTriangle size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                            <PieChart className="text-slate-400" size={24} />
                            Lead Sources
                        </h3>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center h-full">
                            <div className="flex items-center gap-5">
                                <div className="relative w-28 h-28 flex-shrink-0 rounded-full" style={{ background: 'conic-gradient(#136dec 0% 45%, #6366f1 45% 70%, #f59e0b 70% 85%, #f43f5e 85% 100%)' }}>
                                    <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center flex-col shadow-inner shadow-slate-100">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total</span>
                                        <span className="text-sm font-bold text-slate-900">100%</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center gap-2.5">
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#136dec]"></span>
                                            <span className="text-slate-600 font-medium">Website</span>
                                        </div>
                                        <span className="text-slate-900 font-bold">45%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                                            <span className="text-slate-600 font-medium">Referrals</span>
                                        </div>
                                        <span className="text-slate-900 font-bold">25%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                                            <span className="text-slate-600 font-medium">Social</span>
                                        </div>
                                        <span className="text-slate-900 font-bold">15%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                                            <span className="text-slate-600 font-medium">Events</span>
                                        </div>
                                        <span className="text-slate-900 font-bold">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-slate-800 text-base font-bold flex items-center gap-2">
                                <CheckCircle className="text-slate-400" size={24} />
                                Pending Tasks
                                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-bold">5</span>
                            </h3>
                            <a className="text-primary text-sm font-medium hover:underline" href="#">View All</a>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="divide-y divide-slate-100">
                                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                                        <Phone size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-slate-900 truncate">Call Inquiry: Michael Scott</p>
                                        <p className="text-xs text-slate-500">Interested in 3BHK downtown • Added today</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="hidden sm:flex text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded">Overdue 15m</span>
                                        <button className="h-8 w-8 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                                            <CheckCircle size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                                        <Mail size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-slate-900 truncate">Send Brochure: Anna Lee</p>
                                        <p className="text-xs text-slate-500">Villa Project A • Created 2h ago</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="hidden sm:flex text-xs font-medium text-slate-500">Due 4:00 PM</span>
                                        <button className="h-8 w-8 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                                            <CheckCircle size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                                        <CalendarIcon size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-slate-900 truncate">Site Visit: Elena Rodriguez</p>
                                        <p className="text-xs text-slate-500">Luxury Penthouse • Tomorrow 10:00 AM</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="hidden sm:flex text-xs font-medium text-slate-500">Tomorrow</span>
                                        <button className="h-8 w-8 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                                            <CheckCircle size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-center">
                                <button className="text-xs font-medium text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
                                    <Plus size={16} /> Add Task
                                </button>
                            </div>
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
                                <div className="p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-cover bg-center ring-1 ring-slate-100" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPe8aAB3jVE7JJmP3Hy9uKKDjpRpPztG_75pKAX6Qbd5flVPm4dKdSZC7g4fu5xsmzxc0iZULJwY4Wiu0zcbM9usls-gzIDgfTqPOAqM6lrsLHUnBU3_3XoY-aFSGgR-TezwPQe4C7W-knlQG_ffDJb9YIBlFMUhWgK1ic2bTkLgMDJptGBsGsK0Od8SagXVGQyMXdtuF1OhNLVuOkOS3aOh31C3mOmjmnp5e908hOAOa6cQ2yI5bV4AOJC2_oUVei-hDdrlshW-1y')" }}></div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">Michael Scott</p>
                                            <p className="text-[10px] text-slate-500 truncate">3BHK • Budget $450k</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">New</span>
                                    </div>
                                </div>
                                <div className="p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold ring-1 ring-slate-100">AL</div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">Anna Lee</p>
                                            <p className="text-[10px] text-slate-500 truncate">Villa • Budget $1.2M</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">New</span>
                                    </div>
                                </div>
                                <div className="p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold ring-1 ring-slate-100">RJ</div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">Rajesh Jain</p>
                                            <p className="text-[10px] text-slate-500 truncate">Plot • Budget $200k</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">New</span>
                                    </div>
                                </div>
                                <div className="p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-cover bg-center ring-1 ring-slate-100" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmrrEP4rarhXFDsxUl65lCikNvDmMB3838wO2_iQjpXZSoJCsZNOZfx0JgpzSqQ6DDks57uNh7LGE7OQMjYoeo1arB4aL7Xkqlh_pAJLQA8CBFbgc6Dc0dpkNDdTuRNZGywtUHzOEQYY0Z7d9-5UN_6JlmRstsvSPiWjkNoIaqTbQ2uluti3N7_S9HIldrFRC8XN2AA_3zgFSDQ8nQm_ubpjVYUFmc6fjNAErUxc7ebf0eyyUndPeitJkaPZi0UTEAI_JNiy4zxbjH')" }}></div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm font-semibold text-slate-900 truncate group-hover:text-primary transition-colors">David Chen</p>
                                            <p className="text-[10px] text-slate-500 truncate">Commercial • Budget $800k</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">New</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full p-2 text-xs text-center text-slate-500 hover:text-slate-700 bg-slate-50 border-t border-slate-100 transition-colors">
                                View all 12 new leads
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
