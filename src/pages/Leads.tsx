import React from 'react';
import { Download, Plus, TrendingUp, TrendingDown, Search, ChevronDown, Filter, LayoutTemplate, List, MoreHorizontal, Home, DollarSign, Clock, Phone, Mail, Edit, Calendar, CalendarCheck, History } from 'lucide-react';

const Leads: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="flex-shrink-0 z-10 bg-white/80 backdrop-blur-sm border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4 p-6 pb-2">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Presales Pipeline</h2>
                        <p className="text-slate-500 text-sm">Manage and track your active lead opportunities.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:flex h-10 items-center justify-center gap-2 px-4 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                            <Download size={20} />
                            Export
                        </button>
                        <button className="flex h-10 items-center justify-center gap-2 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">
                            <Plus size={20} />
                            Add New Lead
                        </button>
                    </div>
                </div>
                <div className="px-6 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Leads</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">1,240</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 5%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Qualified</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">315</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 2%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Conversion</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">12.5%</p>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-100">
                                <TrendingUp size={14} /> 1.5%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Calls Today</p>
                        <div className="flex items-end justify-between">
                            <p className="text-2xl font-bold text-slate-900">48</p>
                            <span className="text-orange-600 text-xs font-bold bg-orange-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-orange-100">
                                <TrendingDown size={14} /> 10%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-4 flex flex-wrap items-center gap-3">
                    <div className="relative flex-1 min-w-[200px] max-w-sm">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={20} />
                        </div>
                        <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-primary focus:border-transparent placeholder-slate-400 outline-none shadow-sm" placeholder="Search by name, phone..." type="text" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <select className="appearance-none pl-3 pr-10 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:ring-primary focus:border-primary outline-none cursor-pointer min-w-[140px] shadow-sm">
                                <option>All Agents</option>
                                <option>My Leads</option>
                                <option>Unassigned</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <ChevronDown size={20} />
                            </div>
                        </div>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-sm">
                            <Filter size={20} />
                        </button>
                    </div>
                    <div className="ml-auto flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                        <button className="px-3 py-1.5 rounded-md bg-white shadow-sm text-slate-900 text-xs font-medium flex items-center gap-2">
                            <LayoutTemplate size={18} /> Board
                        </button>
                        <button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 text-xs font-medium flex items-center gap-2 transition-colors">
                            <List size={18} /> List
                        </button>
                    </div>
                </div>
            </header>
            <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 custom-scrollbar bg-slate-50/50">
                <div className="flex h-full gap-6 min-w-max">
                    {/* New Leads Column */}
                    <div className="flex flex-col w-[320px] h-full">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-sm shadow-blue-200"></div>
                                <h3 className="text-slate-700 font-bold text-sm">New Leads</h3>
                                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">12</span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3 pb-4">
                            <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPe8aAB3jVE7JJmP3Hy9uKKDjpRpPztG_75pKAX6Qbd5flVPm4dKdSZC7g4fu5xsmzxc0iZULJwY4Wiu0zcbM9usls-gzIDgfTqPOAqM6lrsLHUnBU3_3XoY-aFSGgR-TezwPQe4C7W-knlQG_ffDJb9YIBlFMUhWgK1ic2bTkLgMDJptGBsGsK0Od8SagXVGQyMXdtuF1OhNLVuOkOS3aOh31C3mOmjmnp5e908hOAOa6cQ2yI5bV4AOJC2_oUVei-hDdrlshW-1y')" }}></div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">Michael Scott</p>
                                            <p className="text-slate-500 text-xs">Recently added</p>
                                        </div>
                                    </div>
                                    <span className="bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Hot</span>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Home size={16} className="text-slate-400" />
                                        <span>Interested in 3BHK, Downtown</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <DollarSign size={16} className="text-slate-400" />
                                        <span>Budget: $450k - $600k</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                        <Clock size={14} /> 15 min ago
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                            <Phone size={14} />
                                        </button>
                                        <button className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                            <Mail size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold ring-2 ring-white shadow-sm">AL</div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">Anna Lee</p>
                                            <p className="text-slate-500 text-xs">Web Form</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Home size={16} className="text-slate-400" />
                                        <span>Villa Inquiry</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <DollarSign size={16} className="text-slate-400" />
                                        <span>Budget: $1.2M+</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                        <Clock size={14} /> 1 hour ago
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                            <Phone size={14} />
                                        </button>
                                        <button className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                            <Mail size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contacted Column */}
                    <div className="flex flex-col w-[320px] h-full">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-200"></div>
                                <h3 className="text-slate-700 font-bold text-sm">Contacted</h3>
                                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-0.5 rounded-full">8</span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3 pb-4">
                            <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmrrEP4rarhXFDsxUl65lCikNvDmMB3838wO2_iQjpXZSoJCsZNOZfx0JgpzSqQ6DDks57uNh7LGE7OQMjYoeo1arB4aL7Xkqlh_pAJLQA8CBFbgc6Dc0dpkNDdTuRNZGywtUHzOEQYY0Z7d9-5UN_6JlmRstsvSPiWjkNoIaqTbQ2uluti3N7_S9HIldrFRC8XN2AA_3zgFSDQ8nQm_ubpjVYUFmc6fjNAErUxc7ebf0eyyUndPeitJkaPZi0UTEAI_JNiy4zxbjH')" }}></div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">David Chen</p>
                                            <p className="text-slate-500 text-xs">Waiting for reply</p>
                                        </div>
                                    </div>
                                    <span className="bg-amber-50 text-amber-600 border border-amber-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Warm</span>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Home size={16} className="text-slate-400" />
                                        <span>2BHK Apartment, Suburbs</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-amber-600 font-medium">
                                        <Clock size={16} />
                                        <span>Follow up: Today, 2 PM</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                    <div className="flex -space-x-2">
                                        <div className="h-6 w-6 rounded-full border-2 border-white bg-gray-300 bg-cover shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZtu4ne-mDNgdQ2gQSnix2SWQJ-hwq8HUoZSRLHRP-41yRWk0fduCLMupHJum3TvIXvp11DjsifkwAIY9aLtieHPuss4FOJcbrSxVQ5oKgdxaXgwt6aTedI4AuhAoeUyeonzAXNOZ_tAiU6widAFjgj87ohpzP-WYW0nFoxlH8Xz1JZs9DiZsn_CSsjuEDrhk50KePGyE0GQNJ6YqsKDFbFUUb852oMLamacDHNOFqL7oIJBAaxeWyclbLwoADy6rTSxOi1KwJOXnc')" }}></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="h-7 w-7 rounded-full bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                            <Edit size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all opacity-80 hover:opacity-100">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm font-bold ring-2 ring-white shadow-sm">RK</div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">Rahul Kumar</p>
                                            <p className="text-slate-500 text-xs">Left Voicemail</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Home size={16} className="text-slate-400" />
                                        <span>Commercial Space</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                    <span className="text-[10px] text-slate-400 font-medium">Yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Qualified Column */}
                    <div className="flex flex-col w-[320px] h-full">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200"></div>
                                <h3 className="text-slate-700 font-bold text-sm">Qualified</h3>
                                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full">5</span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3 pb-4">
                            <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer border-l-4 border-l-emerald-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPnUvUh3FsL_bAApx6FyPy3wN_n5I9gY_4lmldQIbDSN2krmLWtR6CD7IhS-9tjbhtSJjPR2oSz5BlHm_4BZAHae7pJ-Wtu4Dbi1rkVKlmqduNGd5iRMbGc8kOXV63PoibxAro6VYXBHLeZRb98pm7qjKOKSHBZwR3Rj5wpv0cA9ztr6DV7OdhyMXy9pMIdYYyjuJLOstJHIrXZusykf_m3MedINVCuqyC-vR6jpl_Nhv6Fg6bsxI5ivtP_RaxQNpR4m42AwjhYfct')" }}></div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">Elena Rodriguez</p>
                                            <p className="text-slate-500 text-xs">Site Visit Scheduled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Home size={16} className="text-slate-400" />
                                        <span>Luxury Penthouse</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium p-1.5 bg-emerald-50 rounded border border-emerald-100">
                                        <CalendarCheck size={16} />
                                        <span>Visit: Tomorrow, 10 AM</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                        <History size={14} />
                                        <span>Updated 4h ago</span>
                                    </div>
                                    <button className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded shadow-md shadow-emerald-200 transition-colors">
                                        Negotiate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nurturing Column */}
                    <div className="flex flex-col w-[320px] h-full">
                        <div className="flex items-center justify-between mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-400 shadow-sm"></div>
                                <h3 className="text-slate-700 font-bold text-sm">Nurturing</h3>
                                <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">24</span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3 pb-4">
                            <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold ring-2 ring-white shadow-sm">JS</div>
                                        <div>
                                            <p className="text-slate-900 font-semibold text-sm">James Smith</p>
                                            <p className="text-slate-500 text-xs">Long term prospect</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Home size={16} className="text-slate-400" />
                                        <span>Investment Property</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <Calendar size={16} className="text-slate-400" />
                                        <span>Revisit in 3 months</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                                    <span className="text-[10px] text-slate-400 font-medium">Last contact: 2w ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add Stage Column */}
                    <div className="flex flex-col w-[320px] h-full opacity-60 hover:opacity-100 transition-opacity">
                        <button className="flex items-center gap-2 px-1 mb-4 text-slate-500 hover:text-primary transition-colors">
                            <Plus size={20} />
                            <span className="text-sm font-medium">Add Stage</span>
                        </button>
                        <div className="flex-1 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center cursor-pointer hover:border-primary/30 hover:bg-blue-50/50 transition-colors">
                            <p className="text-sm text-slate-400 font-medium">Drag leads here to archive</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Leads;
