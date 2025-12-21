import React from 'react';
import { Search, Bell, Plus, ChevronDown, List, LayoutGrid, BedDouble, Bath, Ruler, MoreVertical } from 'lucide-react';

const Projects: React.FC = () => {
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
                                    {/* Row 1 */}
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 rounded-lg bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBj2qdgxqqunz72ZcPSHKCmNtLFcHLaQu7wr0pMshw1HtOaSsgy6rt7zmIw9hvKPNjGkqR-RRpKcWht3KtLVbZHQZk27tIoRORLv-IhSIUPK5SMAojSmkCJ6x_Byy5VfpPwr475K4rJs5rCs2oN48h_tqxnfctZ3zwoujBXtgpox0VDgS-shQ6t_oiMFfN07GZNL42u8va3n7Y_ww-0BVMiUEalmYNuZS5qMBybfvZyY1oTKOSkhQ7d-GYxDMYmDlVoGz5quwCu7x7s')" }}></div>
                                                <div className="min-w-0">
                                                    <p className="text-slate-900 dark:text-white font-bold text-sm truncate">4528 Sunny Disposition Ln</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">Austin, TX 78701 • MLS #123456</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-800">
                                                <span className="size-1.5 rounded-full bg-green-500"></span>
                                                For Sale
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-slate-900 dark:text-white font-bold text-sm">$850,000</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">$303/sqft</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                                <div className="flex items-center gap-1" title="Bedrooms">
                                                    <BedDouble size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">4</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Bathrooms">
                                                    <Bath size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">3</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Square Feet">
                                                    <Ruler size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">2,800</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Row 2 */}
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 rounded-lg bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq1HirpSiLtayrp0k1KKeR5xsNC7pKrIkAK2exU6SYKnzXAMNm0DMEo3MU2yY0FvGEYhoxeIsCnzx1x6S-n_ppUEZBptZm1hVzxAKFPKK080NeVglyg5wNkF7UtA_6NgmarPT1p70PSQSXLGdOEvhGk4IkrmISF78uSnvHH9J48VQpQzkwZXKhjUldMX646UgJ_OD2H_iXe5u-FhNTk7UwSQJ2qwakbPoq1ZrllZFn_EzXKWIObHibx4g3iOLyWmG_1T9sMHMhlD6b')" }}></div>
                                                <div className="min-w-0">
                                                    <p className="text-slate-900 dark:text-white font-bold text-sm truncate">8921 Oakwood Drive</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">Round Rock, TX 78664 • MLS #789012</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
                                                <span className="size-1.5 rounded-full bg-amber-500"></span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-slate-900 dark:text-white font-bold text-sm">$450,000</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">$210/sqft</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                                <div className="flex items-center gap-1" title="Bedrooms">
                                                    <BedDouble size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">3</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Bathrooms">
                                                    <Bath size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">2</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Square Feet">
                                                    <Ruler size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">2,140</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Row 3 */}
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 rounded-lg bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6SPdshBaGEVxuqPxVwRjnmQCGFQw6-xFiY2_OnrGFzfsH9LnqgD-s-hsIarJ5Fk2jnQXcMBk6jHP6KItfpO7xG3dtASxWcnv5UEtYjuIct1penlTOd87cD7SfNIqw7P_nX5ybLQASQyM5q-l6XzwBBVuj5KF3rPuS2jbSMIgeyNaAmyyJc3xPf6bQUyjv1UK2Hiscp7cKlc85my9DzCRtKds84lzKkceoNSPpGPgCrE_r-0Lu67A2nHeGf3zyVd0G6Cl1ZxkTKRIt')" }}></div>
                                                <div className="min-w-0">
                                                    <p className="text-slate-900 dark:text-white font-bold text-sm truncate">100 Congress Ave #2204</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">Austin, TX 78701 • MLS #345678</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                                                <span className="size-1.5 rounded-full bg-slate-500"></span>
                                                Off Market
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-slate-900 dark:text-white font-bold text-sm">$1,200,000</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">$800/sqft</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                                <div className="flex items-center gap-1" title="Bedrooms">
                                                    <BedDouble size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">2</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Bathrooms">
                                                    <Bath size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">2.5</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Square Feet">
                                                    <Ruler size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">1,500</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Row 4 */}
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 rounded-lg bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBb_AcsAB103ss5RvxhHLED7Sq8-Jgar_55p_XyWpWXGQTSzTVV6mvnhTArLeqsgN2Y24FWVaRLzSnFrlGngymOPSKKYvXpPVW390KS2jVsdlJ9FpFho1VZOqrfXgylFM2cD7X3kAZ6SIS5Lh7AVWtmTUNX16lVL6HogEISjaquDvNvv8Yb1_roki8l9RxDu-J_-k7LUwKwppnO9xE__Vp7KK4qorYC8fqQ5FWJM_jINwcFvwOcbae5eeedN6wwgv-zvqcq8BTVuxZX')" }}></div>
                                                <div className="min-w-0">
                                                    <p className="text-slate-900 dark:text-white font-bold text-sm truncate">5500 Westlake Drive</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">Austin, TX 78746 • MLS #992211</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-800">
                                                <span className="size-1.5 rounded-full bg-green-500"></span>
                                                For Sale
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-slate-900 dark:text-white font-bold text-sm">$2,450,000</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">$544/sqft</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                                <div className="flex items-center gap-1" title="Bedrooms">
                                                    <BedDouble size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">5</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Bathrooms">
                                                    <Bath size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">4.5</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Square Feet">
                                                    <Ruler size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">4,500</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Row 5 */}
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-12 rounded-lg bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAybi8TKVYAkyOCeIBge4VoDudHdYRZQKxxdy5raT8LyKkoXDq53zFEp2zfeG7NoOSCPPvhD7JACRUxF8eTLmtch2mmk-2jgoy4RS-qOxeINhfMTVRARr71tEDc2cVTkaDE-r96oQJkGBdfJzoXWZ9pf5i08VKsg0yO6cWSeJ4ICXMK8SqfasXNcol3SgXdLC_F4FkOiZRC8y3RFequuzyundFZXqto_bvgaRGW9j7jEluDvVttSfS78LlEXqjhxccnkDi_c5pyd8g3')" }}></div>
                                                <div className="min-w-0">
                                                    <p className="text-slate-900 dark:text-white font-bold text-sm truncate">7712 Creative Road</p>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 truncate">Pflugerville, TX 78660 • MLS #112233</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                                                <span className="size-1.5 rounded-full bg-blue-500"></span>
                                                New
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-slate-900 dark:text-white font-bold text-sm">$320,000</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">$188/sqft</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                                <div className="flex items-center gap-1" title="Bedrooms">
                                                    <BedDouble size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">3</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Bathrooms">
                                                    <Bath size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">2</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Square Feet">
                                                    <Ruler size={18} />
                                                    <span className="font-medium text-slate-900 dark:text-slate-200">1,700</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
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
