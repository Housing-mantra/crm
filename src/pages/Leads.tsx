import React from 'react';
import { Download, Plus, Search, Filter, LayoutTemplate, List, MoreHorizontal, Phone, Mail, Home, MessageSquare } from 'lucide-react';
import '../styles/Leads.css';

const Leads: React.FC = () => {
    return (
        <div className="leads-container">
            <header className="leads-header">
                <div className="header-top">
                    <div className="header-titles">
                        <h2>Presales Pipeline</h2>
                        <p>Manage and track your active lead opportunities.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn btn-outline">
                            <Download size={18} />
                            Export
                        </button>
                        <button className="btn btn-primary">
                            <Plus size={18} />
                            Add New Lead
                        </button>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="filters-bar">
                    <div className="search-wrapper">
                        <Search className="search-icon" size={20} />
                        <input type="text" placeholder="Search by name, phone..." />
                    </div>

                    <div className="filter-group">
                        <select className="select-input">
                            <option>All Agents</option>
                            <option>My Leads</option>
                            <option>Unassigned</option>
                        </select>
                        <button className="btn-icon">
                            <Filter size={20} />
                        </button>
                    </div>

                    <div className="view-toggle">
                        <button className="toggle-btn active">
                            <LayoutTemplate size={18} /> Board
                        </button>
                        <button className="toggle-btn">
                            <List size={18} /> List
                        </button>
                    </div>
                </div>
            </header>

            <div className="leads-board">
                {/* New Leads Column */}
                <div className="board-column">
                    <div className="column-header">
                        <div className="column-title">
                            <div className="dot blue"></div>
                            <h3>New Leads</h3>
                            <span className="count blue-bg">12</span>
                        </div>
                        <button className="btn-icon-sm"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="column-content">
                        <div className="lead-card">
                            <div className="card-top">
                                <div className="card-user">
                                    <div className="avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPe8aAB3jVE7JJmP3Hy9uKKDjpRpPztG_75pKAX6Qbd5flVPm4dKdSZC7g4fu5xsmzxc0iZULJwY4Wiu0zcbM9usls-gzIDgfTqPOAqM6lrsLHUnBU3_3XoY-aFSGgR-TezwPQe4C7W-knlQG_ffDJb9YIBlFMUhWgK1ic2bTkLgMDJptGBsGsK0Od8SagXVGQyMXdtuF1OhNLVuOkOS3aOh31C3mOmjmnp5e908hOAOa6cQ2yI5bV4AOJC2_oUVei-hDdrlshW-1y')" }}></div>
                                    <div>
                                        <p className="card-name">Michael Scott</p>
                                        <p className="card-sub">Recently added</p>
                                    </div>
                                </div>
                                <span className="badge hot">Hot</span>
                            </div>
                            <div className="card-details">
                                <div className="detail-row">
                                    <Home size={14} className="detail-icon" />
                                    <span>Interested in 3BHK, Downtown</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <span className="time-ago">15 min ago</span>
                                <div className="action-btns">
                                    <button className="action-btn"><Phone size={14} /></button>
                                    <button className="action-btn"><Mail size={14} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="lead-card">
                            <div className="card-top">
                                <div className="card-user">
                                    <div className="avatar-initials purple">AL</div>
                                    <div>
                                        <p className="card-name">Anna Lee</p>
                                        <p className="card-sub">Web Form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-details">
                                <div className="detail-row">
                                    <Home size={14} className="detail-icon" />
                                    <span>Villa Inquiry</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contacted Column */}
                <div className="board-column">
                    <div className="column-header">
                        <div className="column-title">
                            <div className="dot amber"></div>
                            <h3>Contacted</h3>
                            <span className="count amber-bg">8</span>
                        </div>
                        <button className="btn-icon-sm"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="column-content">
                        <div className="lead-card">
                            <div className="card-top">
                                <div className="card-user">
                                    <div className="avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmrrEP4rarhXFDsxUl65lCikNvDmMB3838wO2_iQjpXZSoJCsZNOZfx0JgpzSqQ6DDks57uNh7LGE7OQMjYoeo1arB4aL7Xkqlh_pAJLQA8CBFbgc6Dc0dpkNDdTuRNZGywtUHzOEQYY0Z7d9-5UN_6JlmRstsvSPiWjkNoIaqTbQ2uluti3N7_S9HIldrFRC8XN2AA_3zgFSDQ8nQm_ubpjVYUFmc6fjNAErUxc7ebf0eyyUndPeitJkaPZi0UTEAI_JNiy4zxbjH')" }}></div>
                                    <div>
                                        <p className="card-name">David Chen</p>
                                        <p className="card-sub">Waiting for reply</p>
                                    </div>
                                </div>
                                <span className="badge warm">Warm</span>
                            </div>
                            <div className="card-details">
                                <div className="detail-row">
                                    <Home size={14} className="detail-icon" />
                                    <span>2BHK Apartment</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <div className="agent-avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZtu4ne-mDNgdQ2gQSnix2SWQJ-hwq8HUoZSRLHRP-41yRWk0fduCLMupHJum3TvIXvp11DjsifkwAIY9aLtieHPuss4FOJcbrSxVQ5oKgdxaXgwt6aTedI4AuhAoeUyeonzAXNOZ_tAiU6widAFjgj87ohpzP-WYW0nFoxlH8Xz1JZs9DiZsn_CSsjuEDrhk50KePGyE0GQNJ6YqsKDFbFUUb852oMLamacDHNOFqL7oIJBAaxeWyclbLwoADy6rTSxOi1KwJOXnc')" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Qualified Column */}
                <div className="board-column">
                    <div className="column-header">
                        <div className="column-title">
                            <div className="dot emerald"></div>
                            <h3>Qualified</h3>
                            <span className="count emerald-bg">5</span>
                        </div>
                        <button className="btn-icon-sm"><MoreHorizontal size={20} /></button>
                    </div>
                    <div className="column-content">
                        <div className="lead-card border-l-emerald">
                            <div className="card-top">
                                <div className="card-user">
                                    <div className="avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPnUvUh3FsL_bAApx6FyPy3wN_n5I9gY_4lmldQIbDSN2krmLWtR6CD7IhS-9tjbhtSJjPR2oSz5BlHm_4BZAHae7pJ-Wtu4Dbi1rkVKlmqduNGd5iRMbGc8kOXV63PoibxAro6VYXBHLeZRb98pm7qjKOKSHBZwR3Rj5wpv0cA9ztr6DV7OdhyMXy9pMIdYYyjuJLOstJHIrXZusykf_m3MedINVCuqyC-vR6jpl_Nhv6Fg6bsxI5ivtP_RaxQNpR4m42AwjhYfct')" }}></div>
                                    <div>
                                        <p className="card-name">Elena Rodriguez</p>
                                        <p className="card-sub">Site Visit Scheduled</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-details">
                                <div className="detail-row highlight-emerald">
                                    <span>Visit: Tomorrow, 10 AM</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <span className="time-ago">Updated 4h ago</span>
                                <button className="btn-xs-primary">Negotiate</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Leads;
