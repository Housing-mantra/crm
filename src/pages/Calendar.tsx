import React from 'react';
import { Search, Bell, ChevronLeft, ChevronRight, ChevronDown, Plus } from 'lucide-react';

const Calendar: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
            <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Calendar</h2>

                <div className="flex items-center gap-3">
                    <div className="relative hidden md:block">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={18} />
                        </div>
                        <input
                            className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                            placeholder="Search events..."
                            type="text"
                        />
                    </div>

                    <button className="hidden sm:flex h-9 items-center justify-center gap-2 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">
                        <Bell size={18} />
                        <span className="hidden lg:inline">Alerts</span>
                    </button>
                </div>
            </header>
            {/* Main Workspace */}
            <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                {/* Filters Sidebar */}
                <aside className="w-full md:w-72 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex-col gap-6 p-6 hidden lg:flex overflow-y-auto">
                    {/* Mini Calendar */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">September 2023</span>
                            <div className="flex gap-1">
                                <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500">
                                    <ChevronLeft size={18} />
                                </button>
                                <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                        {/* Simplified Grid for visuals */}
                        <div className="grid grid-cols-7 gap-y-2 text-center text-xs text-slate-500 dark:text-slate-400">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                            <span className="text-slate-300">27</span><span className="text-slate-300">28</span><span className="text-slate-300">29</span><span className="text-slate-300">30</span><span className="text-slate-300">31</span><span>1</span><span>2</span>
                            <span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                            <span>10</span><span>11</span><span>12</span><span>13</span><span className="bg-primary text-white rounded-full size-6 flex items-center justify-center mx-auto">14</span><span>15</span><span>16</span>
                            <span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
                            <span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
                        </div>
                    </div>
                    <hr className="border-slate-200 dark:border-slate-800" />
                    {/* Calendar Filters */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">My Calendars</p>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary/20 size-4" type="checkbox" />
                            <span className="size-3 rounded-full bg-blue-500"></span>
                            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Showings</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary/20 size-4" type="checkbox" />
                            <span className="size-3 rounded-full bg-emerald-500"></span>
                            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Closings</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary/20 size-4" type="checkbox" />
                            <span className="size-3 rounded-full bg-purple-500"></span>
                            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Open Houses</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-slate-300 text-primary focus:ring-primary/20 size-4" type="checkbox" />
                            <span className="size-3 rounded-full bg-amber-500"></span>
                            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Follow-ups</span>
                        </label>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Team</p>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-6" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1fdlPS8J_Z6-Xys3URH_L8MkFMBRFmNpE9rcbx0cMpw5E5j77lC1i5Jrb7Qu8KBzLsB_mB0ecKGLs4m2g36sZ04_xg02qFePIJ4YnxcusgsnG1H7lUmz8_8BC62kfcNaoxKHTfDeJRdTWOhug7N42eO_sRx2P0Te80F58nIOncPLLV6gHsN5bYsryZVoiioyngRO9AX4whOCKUj6iBHaNAIs9G2rLWQ0PUielnYWk_3jUwpcYl6YiQgwKkkW7vMHzoEU0xrX8bvML")' }}></div>
                                <span className="text-sm font-medium">Whole Team</span>
                            </div>
                            <ChevronDown size={20} className="text-slate-500" />
                        </div>
                    </div>
                    {/* Promo / CTA */}
                    <div className="mt-auto bg-primary/5 dark:bg-primary/10 rounded-xl p-4 flex flex-col gap-2">
                        <p className="text-sm font-bold text-primary">Need to sync?</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Connect your Google Calendar to see all your events in one place.</p>
                        <button className="text-xs font-bold text-primary hover:underline text-left mt-1">Connect Calendar →</button>
                    </div>
                </aside>
                {/* Calendar View */}
                <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-900">
                    {/* Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 border-b border-slate-200 dark:border-slate-800 shrink-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">September 2023</h2>
                            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5">
                                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 shadow-sm rounded-md transition-all text-slate-600 dark:text-slate-300">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="px-3 text-sm font-medium text-slate-600 dark:text-slate-300">Today</button>
                                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 shadow-sm rounded-md transition-all text-slate-600 dark:text-slate-300">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ml-auto">
                            {/* View Switcher */}
                            <div className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
                                <label className="flex cursor-pointer h-full items-center justify-center rounded-md px-3 bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white text-sm font-medium transition-all">
                                    <span>Month</span>
                                    <input defaultChecked className="hidden" name="view" type="radio" value="Month" />
                                </label>
                                <label className="flex cursor-pointer h-full items-center justify-center rounded-md px-3 hover:bg-slate-200 dark:hover:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-sm font-medium transition-all">
                                    <span>Week</span>
                                    <input className="hidden" name="view" type="radio" value="Week" />
                                </label>
                                <label className="flex cursor-pointer h-full items-center justify-center rounded-md px-3 hover:bg-slate-200 dark:hover:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-sm font-medium transition-all">
                                    <span>Day</span>
                                    <input className="hidden" name="view" type="radio" value="Day" />
                                </label>
                                <label className="flex cursor-pointer h-full items-center justify-center rounded-md px-3 hover:bg-slate-200 dark:hover:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-sm font-medium transition-all">
                                    <span>Agenda</span>
                                    <input className="hidden" name="view" type="radio" value="Agenda" />
                                </label>
                            </div>
                            {/* Primary Action */}
                            <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 h-10 rounded-lg font-bold text-sm shadow-md shadow-blue-500/20 transition-all">
                                <Plus size={20} />
                                <span className="hidden sm:inline">New Event</span>
                            </button>
                        </div>
                    </div>
                    {/* Calendar Grid Container */}
                    <div className="flex-1 overflow-y-auto">
                        {/* Weekday Header */}
                        <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 sticky top-0 z-10">
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Mon</div>
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Tue</div>
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Wed</div>
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Thu</div>
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Fri</div>
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Sat</div>
                            <div className="py-3 text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Sun</div>
                        </div>
                        {/* Days Grid */}
                        <div className="grid grid-cols-7 grid-rows-5 min-h-[800px] bg-slate-200 dark:bg-slate-800 gap-px border-b border-slate-200 dark:border-slate-800">
                            {/* Previous Month Days */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1">
                                <span className="text-slate-400 text-sm font-medium p-1">28</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1">
                                <span className="text-slate-400 text-sm font-medium p-1">29</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1">
                                <span className="text-slate-400 text-sm font-medium p-1">30</span>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1">
                                <span className="text-slate-400 text-sm font-medium p-1">31</span>
                            </div>
                            {/* Current Month Days */}
                            {/* Day 1 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">1</span>
                                {/* Event Pill: Showing */}
                                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 truncate">10:00 AM Showing</p>
                                    <p className="text-[10px] text-blue-600/80 dark:text-blue-400/80 truncate">123 Maple Dr</p>
                                </div>
                            </div>
                            {/* Day 2 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">2</span>
                            </div>
                            {/* Day 3 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">3</span>
                            </div>
                            {/* Day 4 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">4</span>
                                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-amber-700 dark:text-amber-300 truncate">2:00 PM Follow-up</p>
                                    <p className="text-[10px] text-amber-600/80 dark:text-amber-400/80 truncate">Call w/ Sarah J.</p>
                                </div>
                            </div>
                            {/* Day 5 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">5</span>
                                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow mb-1">
                                    <p className="text-xs font-bold text-purple-700 dark:text-purple-300 truncate">11:00 AM Open House</p>
                                    <p className="text-[10px] text-purple-600/80 dark:text-purple-400/80 truncate">8800 Sunset Blvd</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 truncate">4:00 PM Showing</p>
                                    <p className="text-[10px] text-blue-600/80 dark:text-blue-400/80 truncate">450 Highland Ave</p>
                                </div>
                            </div>
                            {/* Day 6 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">6</span>
                            </div>
                            {/* Day 7 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">7</span>
                            </div>
                            {/* Week 2 */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">8</span>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">9</span>
                                <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-2 border-emerald-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 truncate">9:00 AM Closing</p>
                                    <p className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 truncate">The Harrison Estate</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">10</span>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">11</span>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">12</span>
                                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 truncate">1:30 PM Showing</p>
                                    <p className="text-[10px] text-blue-600/80 dark:text-blue-400/80 truncate">220 Riverside Dr</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">13</span>
                            </div>
                            {/* Today Indicator */}
                            <div className="bg-blue-50/30 dark:bg-blue-900/10 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors relative">
                                <span className="bg-primary text-white rounded-full size-7 flex items-center justify-center text-sm font-bold shadow-sm">14</span>
                                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-2 border-amber-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow mt-1">
                                    <p className="text-xs font-bold text-amber-700 dark:text-amber-300 truncate">12:00 PM Lunch</p>
                                    <p className="text-[10px] text-amber-600/80 dark:text-amber-400/80 truncate">Client Meeting</p>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 truncate">3:00 PM Showing</p>
                                    <p className="text-[10px] text-blue-600/80 dark:text-blue-400/80 truncate">77 Park Ave Penthouse</p>
                                </div>
                            </div>
                            {/* Rest of month (simplified) */}
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">15</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">16</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">17</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">18</span>
                                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-2 border-purple-500 p-1.5 rounded-r cursor-pointer hover:shadow-md transition-shadow">
                                    <p className="text-xs font-bold text-purple-700 dark:text-purple-300 truncate">All Day Open House</p>
                                    <p className="text-[10px] text-purple-600/80 dark:text-purple-400/80 truncate">Multiple Locations</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">19</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">20</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">21</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">22</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">23</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">24</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">25</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">26</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">27</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">28</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">29</span></div>
                            <div className="bg-white dark:bg-slate-900 p-2 min-h-[140px] flex flex-col gap-1 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"><span className="text-slate-700 dark:text-slate-300 text-sm font-bold p-1">30</span></div>
                            {/* Next Month */}
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1"><span className="text-slate-400 text-sm font-medium p-1">1</span></div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1"><span className="text-slate-400 text-sm font-medium p-1">2</span></div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1"><span className="text-slate-400 text-sm font-medium p-1">3</span></div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1"><span className="text-slate-400 text-sm font-medium p-1">4</span></div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-2 min-h-[140px] flex flex-col gap-1"><span className="text-slate-400 text-sm font-medium p-1">5</span></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Calendar;
