import React from 'react';
import { Download, Plus, TrendingUp, TrendingDown, Hourglass, CheckCircle, Phone, Mail, Calendar as CalendarIcon, PersonStanding, Search, Clock, AlertTriangle, History } from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="header-content">
                    <div className="header-titles">
                        <h2>Dashboard</h2>
                        <p>Overview of your real estate operations and daily tasks.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn btn-outline">
                            <Download size={18} />
                            Export Report
                        </button>
                        <button className="btn btn-primary">
                            <Plus size={18} />
                            Add New Lead
                        </button>
                    </div>
                </div>
            </header>

            <div className="dashboard-content">
                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <p className="stat-label">Total Leads</p>
                        <div className="stat-value-row">
                            <p className="stat-value">1,240</p>
                            <span className="stat-badge success">
                                <TrendingUp size={14} /> 5%
                            </span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Qualified Leads</p>
                        <div className="stat-value-row">
                            <p className="stat-value">315</p>
                            <span className="stat-badge success">
                                <TrendingUp size={14} /> 2%
                            </span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Conversion Rate</p>
                        <div className="stat-value-row">
                            <p className="stat-value">12.5%</p>
                            <span className="stat-badge success">
                                <TrendingUp size={14} /> 1.5%
                            </span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Calls Made Today</p>
                        <div className="stat-value-row">
                            <p className="stat-value">48</p>
                            <span className="stat-badge warning">
                                <TrendingDown size={14} /> 10%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Lead Response Status */}
                <div className="section">
                    <h3 className="section-title">
                        <Hourglass className="icon-subtle" size={20} />
                        Lead Response Status
                    </h3>
                    <div className="status-grid">
                        <div className="status-card blue">
                            <div>
                                <p className="status-label">Newly Created</p>
                                <p className="status-count">12</p>
                            </div>
                            <div className="status-icon"><PersonStanding size={20} /></div>
                        </div>
                        <div className="status-card indigo">
                            <div>
                                <p className="status-label">Created ≤ 1 days</p>
                                <p className="status-count">8</p>
                            </div>
                            <div className="status-icon"><Clock size={20} /></div>
                        </div>
                        <div className="status-card amber">
                            <div>
                                <p className="status-label">Created 1-3 days</p>
                                <p className="status-count">15</p>
                            </div>
                            <div className="status-icon"><History size={20} /></div>
                        </div>
                        <div className="status-card rose">
                            <div>
                                <p className="status-label">Created {'>'} 3 days</p>
                                <p className="status-count">5</p>
                            </div>
                            <div className="status-icon"><AlertTriangle size={20} /></div>
                        </div>
                    </div>
                </div>

                {/* Main Content Areas */}
                <div className="dashboard-split">
                    {/* Pending Tasks */}
                    <div className="tasks-section">
                        <div className="section-header">
                            <h3 className="section-title">
                                <CheckCircle className="icon-subtle" size={20} />
                                Pending Tasks
                                <span className="count-badge">5</span>
                            </h3>
                            <a href="#" className="link-primary">View All</a>
                        </div>
                        <div className="card">
                            <div className="task-list">
                                <div className="task-item">
                                    <div className="task-icon blue"><Phone size={20} /></div>
                                    <div className="task-details">
                                        <p className="task-name">Call Inquiry: Michael Scott</p>
                                        <p className="task-sub">Interested in 3BHK downtown • Added today</p>
                                    </div>
                                    <span className="pill pill-danger">Overdue 15m</span>
                                </div>
                                <div className="task-item">
                                    <div className="task-icon purple"><Mail size={20} /></div>
                                    <div className="task-details">
                                        <p className="task-name">Send Brochure: Anna Lee</p>
                                        <p className="task-sub">Villa Project A • Created 2h ago</p>
                                    </div>
                                    <span className="pill-text">Due 4:00 PM</span>
                                </div>
                                <div className="task-item">
                                    <div className="task-icon amber"><CalendarIcon size={20} /></div>
                                    <div className="task-details">
                                        <p className="task-name">Site Visit: Elena Rodriguez</p>
                                        <p className="task-sub">Luxury Penthouse • Tomorrow 10:00 AM</p>
                                    </div>
                                    <span className="pill-text">Tomorrow</span>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn-text">+ Add Task</button>
                            </div>
                        </div>
                    </div>

                    {/* New Leads */}
                    <div className="leads-section">
                        <h3 className="section-title">New Leads</h3>
                        <div className="card">
                            <div className="card-search">
                                <Search size={18} className="search-icon" />
                                <input type="text" placeholder="Filter new leads..." />
                            </div>
                            <div className="leads-list">
                                <div className="lead-item">
                                    <div className="lead-avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPe8aAB3jVE7JJmP3Hy9uKKDjpRpPztG_75pKAX6Qbd5flVPm4dKdSZC7g4fu5xsmzxc0iZULJwY4Wiu0zcbM9usls-gzIDgfTqPOAqM6lrsLHUnBU3_3XoY-aFSGgR-TezwPQe4C7W-knlQG_ffDJb9YIBlFMUhWgK1ic2bTkLgMDJptGBsGsK0Od8SagXVGQyMXdtuF1OhNLVuOkOS3aOh31C3mOmjmnp5e908hOAOa6cQ2yI5bV4AOJC2_oUVei-hDdrlshW-1y')" }}></div>
                                    <div className="lead-info">
                                        <p className="lead-name">Michael Scott</p>
                                        <p className="lead-sub">3BHK • Budget $450k</p>
                                    </div>
                                    <span className="pill pill-blue">New</span>
                                </div>
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
