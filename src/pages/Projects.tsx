import React from 'react';
import { Search, Bell, Plus, ChevronDown, List, LayoutGrid, MoreVertical } from 'lucide-react';

const Projects: React.FC = () => {
    const [projects, setProjects] = React.useState<any[]>([]);

    React.useEffect(() => {
        const saved = localStorage.getItem('crm_landing_pages');
        let localProjects = [];
        try {
            if (saved) {
                localProjects = JSON.parse(saved);
            }
        } catch (e) {
            console.error('Error parsing projects', e);
        }

        // Default to 'The Forestia' if no projects found (Mock/Demo Data)
        if (localProjects.length === 0) {
            localProjects = [{ name: 'The Forestia', url: 'http://localhost:5173/The%20Forestia/index.html' }];
            // Optionally save this back to sync state
            localStorage.setItem('crm_landing_pages', JSON.stringify(localProjects));
        }

        setProjects(localProjects);
    }, []);
    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Top Nav (optional, usually handled by Dashboard layout but adding here if specific to this page view or just to match HTML structure inside main) - 
                Wait, looking at previous pages like Leads/Dashboard, headers are inside the page component. 
                The HTML provided has a "Top Nav" header inside "Main Content". I will include it.
            */}
            <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white hidden md:block">Project Management</h2>
                <div className="flex items-center gap-4 ml-auto">
                    <div className="relative hidden sm:block">
                        <input className="pl-10 pr-4 py-2 w-64 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" placeholder="Global Search..." type="text" />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={20} />
                        </div>
                    </div>
                    <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 relative transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                    </button>
                </div>
            </header>

            {/* Scrollable Page Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
                    {/* Page Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Projects</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your active listings and inventory.</p>
                        </div>
                        <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm shadow-blue-200 dark:shadow-none transition-all">
                            <Plus size={20} />
                            <span>Add New Project</span>
                        </button>
                    </div>

                    {/* Filters Bar */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1 relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                    <Search size={20} />
                                </div>
                                <input className="w-full pl-10 pr-4 h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Search by address, MLS ID, or agent name" type="text" />
                            </div>
                            {/* Filters Group */}
                            <div className="flex flex-wrap gap-3 items-center">
                                <div className="relative min-w-[140px]">
                                    <select className="w-full h-11 pl-3 pr-8 appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50">
                                        <option>Status: All</option>
                                        <option>For Sale</option>
                                        <option>Pending</option>
                                        <option>Sold</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                                <div className="relative min-w-[140px]">
                                    <select className="w-full h-11 pl-3 pr-8 appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50">
                                        <option>Type: All</option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                                <div className="relative min-w-[140px]">
                                    <select className="w-full h-11 pl-3 pr-8 appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50">
                                        <option>Price: Any</option>
                                        <option>$0 - $500k</option>
                                        <option>$500k - $1M</option>
                                        <option>$1M+</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-slate-200 dark:bg-slate-600 mx-1 hidden lg:block"></div>
                                <div className="flex bg-slate-50 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-600">
                                    <button className="p-1.5 rounded bg-white dark:bg-slate-600 shadow-sm text-primary dark:text-white transition-all">
                                        <List size={20} />
                                    </button>
                                    <button className="p-1.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                                        <LayoutGrid size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Table */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
                                        <th className="px-6 py-4 w-[40%]">Project</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Price</th>
                                        <th className="px-6 py-4">Details</th>
                                        <th className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {projects.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                                                No projects found. Integrate a landing page to see it here.
                                            </td>
                                        </tr>
                                    ) : (
                                        projects.map((project, index) => (
                                            <tr key={index} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-16 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-600 font-bold text-slate-400 text-xs">
                                                            IMG
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="text-slate-900 dark:text-white font-bold text-sm truncate">{project.name}</p>
                                                            <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">{project.url}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-800">
                                                        <span className="size-1.5 rounded-full bg-green-500"></span>
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="text-slate-900 dark:text-white font-bold text-sm">-</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                                        <span className="text-xs">Landing Page Integration</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-primary dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                        <MoreVertical size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">5</span> of <span className="font-medium text-slate-900 dark:text-white">42</span> results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 text-sm text-slate-500 dark:text-slate-400 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors" disabled>
                                    Previous
                                </button>
                                <button className="size-8 flex items-center justify-center rounded bg-primary text-white text-sm font-medium shadow-sm">1</button>
                                <button className="size-8 flex items-center justify-center rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium transition-colors">2</button>
                                <button className="size-8 flex items-center justify-center rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium transition-colors">3</button>
                                <span className="text-slate-500 px-1">...</span>
                                <button className="size-8 flex items-center justify-center rounded text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium transition-colors">9</button>
                                <button className="px-3 py-1 text-sm text-primary dark:text-blue-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
