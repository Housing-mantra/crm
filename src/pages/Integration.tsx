import React, { useState } from 'react';
import {
    X, Facebook, FileText, TableProperties, MessageCircle, Globe, Zap, Calendar,
    Building, Home, Workflow, LayoutGrid, Layers, Target, Activity, ShoppingBag, Wallet, MapPin,
    ShoppingCart, PhoneCall, PhoneForwarded, PhoneIncoming, Phone, BrickWall, Search, Plus
} from 'lucide-react';
import API_BASE_URL from '../config';

const Integration: React.FC = () => {
    // State for Website/Landing Page Integration
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPageForGuide, setSelectedPageForGuide] = useState<{ name: string; url: string } | null>(null);
    const [landingPages, setLandingPages] = useState<{ name: string; url: string }[]>(() => {
        const saved = localStorage.getItem('crm_landing_pages');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Failed to parse landing pages from local storage', e);
                return [];
            }
        }
        return [
            { name: 'The Forestia', url: 'http://localhost:5173/The%20Forestia/index.html' }
        ];
    });

    React.useEffect(() => {
        localStorage.setItem('crm_landing_pages', JSON.stringify(landingPages));
    }, [landingPages]);

    const [formData, setFormData] = useState({ name: '', url: '' });

    const handleConnectClick = (integrationName: string) => {
        if (integrationName === 'Website') {
            setIsModalOpen(true);
        } else {
            alert(`Configuration for ${integrationName} coming soon!`);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', url: '' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.url) {
            setLandingPages([...landingPages, formData]);
            handleCloseModal();
        }
    };

    const integrations = {
        "Estate Exclusive": [
            { name: 'Facebook', icon: <Facebook className="w-6 h-6 text-blue-600" />, desc: 'Integrate pages/ad forms by Login in Facebook' },
            { name: 'Google Forms', icon: <FileText className="w-6 h-6 text-purple-600" />, desc: 'Integrate Google forms with Push Api' },
            { name: 'Google Sheet', icon: <TableProperties className="w-6 h-6 text-green-600" />, desc: 'Integrate Google sheet' },
            { name: 'Whatsapp', icon: <MessageCircle className="w-6 h-6 text-green-500" />, desc: 'Integrate Whatsapp messages with your vendor' },
            { name: 'Website', icon: <Globe className="w-6 h-6 text-blue-500" />, desc: 'Integrate Google forms with Push Api' },
            { name: 'Zapier', icon: <Zap className="w-6 h-6 text-orange-600" />, desc: 'Integrate Zapier with Push Api' },
            { name: 'Scheduler', icon: <Calendar className="w-6 h-6 text-cyan-600" />, desc: 'Schedule your leads/distribution/work and more' },
        ],
        "Real Estate Portals": [
            { name: '99 Acres', icon: <Building className="w-6 h-6 text-blue-700" />, desc: 'Integrate Real Time 99 Acres with push api' },
            { name: 'Magic Bricks', icon: <BrickWall className="w-6 h-6 text-red-600" />, desc: 'Integrate Real Time Magic Bricks with push api' },
            { name: 'Housing', icon: <Home className="w-6 h-6 text-purple-600" />, desc: 'Integrate Real Time Housing with push api' },
            { name: 'Make Dot Com', icon: <Workflow className="w-6 h-6 text-purple-500" />, desc: 'Integrate Real Time Make dot com with push api' },
            { name: 'Square Yards', icon: <LayoutGrid className="w-6 h-6 text-emerald-600" />, desc: 'Integrate Real Time Square Yards with push api' },
            { name: 'Common Floor', icon: <Layers className="w-6 h-6 text-orange-500" />, desc: 'Integrate Real Time Common Floor with push api' },
            { name: 'Just lead', icon: <Target className="w-6 h-6 text-red-500" />, desc: 'Integrate Real Time Just Lead with push api' },
            { name: 'SpeedoRing', icon: <Activity className="w-6 h-6 text-blue-400" />, desc: 'Integrate Real Time SpeedoRing with push api' },
        ],
        "Miscellaneous": [
            { name: 'OLX', icon: <ShoppingBag className="w-6 h-6 text-cyan-500" />, desc: 'Integrate Real Time OLX with push api' },
            { name: 'Property Walle', icon: <Wallet className="w-6 h-6 text-brown-500" />, desc: 'Integrate Real Time Property walle with push api' },
            { name: 'My Realestate India', icon: <MapPin className="w-6 h-6 text-red-500" />, desc: 'Integrate Real Time My Realestate India with push api' },
            { name: 'India Mart', icon: <ShoppingCart className="w-6 h-6 text-green-600" />, desc: 'Integrate India Mart Pull api' },
        ],
        "Third Party IVRS": [
            { name: 'Sigma Voice', icon: <PhoneCall className="w-6 h-6 text-blue-600" />, desc: 'Integrate Sigma IVRS' },
            { name: 'Caller Desk', icon: <PhoneForwarded className="w-6 h-6 text-green-600" />, desc: 'Integrate Caller Desk IVRS' },
            { name: 'Knowrality', icon: <PhoneIncoming className="w-6 h-6 text-purple-600" />, desc: 'Integrate Knowrality IVRS' },
            { name: 'MCUBE', icon: <Phone className="w-6 h-6 text-blue-800" />, desc: 'Integrate MCUBE IVRS' },
        ]
    };

    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900">Integrations Store</h2>

                <div className="flex items-center gap-3">
                    <div className="relative hidden md:block">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={18} />
                        </div>
                        <input
                            className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                            placeholder="Search integrations..."
                            type="text"
                        />
                    </div>

                    <button className="flex h-9 items-center justify-center gap-2 px-3 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">
                        <Plus size={18} />
                        Integration Request
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="space-y-12">
                    {Object.entries(integrations).map(([category, items]) => (
                        <div key={category}>
                            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full"></span>
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {items.map((item) => (
                                    <div key={item.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-base font-bold text-slate-800 leading-tight">{item.name}</h3>
                                                <p className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Integration</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-6 line-clamp-2 h-10">{item.desc}</p>
                                        <button
                                            onClick={() => handleConnectClick(item.name)}
                                            className="w-full py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-primary hover:border-blue-100 transition-all"
                                        >
                                            {item.name === 'Website' ? 'Manage' : 'Connect'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Display Added Landing Pages (Only showing this section if Website integration is active or pages exist) */}
                {landingPages.length > 0 && (
                    <div className="mt-16 pt-10 border-t border-slate-200">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Connected Websites & Landing Pages</h2>
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <table className="w-full text-sm text-left text-slate-500">
                                <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">URL</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {landingPages.map((page, index) => (
                                        <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                                            <td className="px-6 py-4 font-medium text-slate-900">{page.name}</td>
                                            <td className="px-6 py-4">{page.url}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
                                            </td>
                                            <td className="px-6 py-4 flex gap-3">
                                                <button
                                                    onClick={() => setSelectedPageForGuide(page)}
                                                    className="text-primary hover:text-blue-700 text-sm font-medium"
                                                >
                                                    Setup Guide
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const newLead = {
                                                            id: Date.now().toString(),
                                                            name: `Test User ${Math.floor(Math.random() * 1000)}`,
                                                            budget: '$500k - $700k',
                                                            type: 'Apartment',
                                                            source: page.name,
                                                            status: 'New',
                                                            timestamp: Date.now()
                                                        };
                                                        const existingLeads = JSON.parse(localStorage.getItem('crm_leads') || '[]');
                                                        localStorage.setItem('crm_leads', JSON.stringify([newLead, ...existingLeads]));
                                                        alert('Lead simulated! Check Dashboard.');
                                                    }}
                                                    className="text-slate-600 hover:text-slate-900 text-sm font-medium"
                                                >
                                                    Simulate Lead
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Add Page Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in">
                        <div className="flex items-center justify-between p-4 border-b border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800">Add Website / Landing Page</h3>
                            <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Page Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary outline-none"
                                    placeholder="e.g. Corporate Website"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">URL</label>
                                <input
                                    type="url"
                                    required
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary outline-none"
                                    placeholder="https://"
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                />
                            </div>
                            <div className="flex gap-3 mt-2">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="flex-1 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-600"
                                >
                                    Add Page
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Integration Guide Modal */}
            {selectedPageForGuide && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in">
                        <div className="flex items-center justify-between p-4 border-b border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800">Setup Guide: {selectedPageForGuide.name}</h3>
                            <button onClick={() => setSelectedPageForGuide(null)} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            <p className="text-sm text-slate-600 mb-4">
                                To send leads from <strong>{selectedPageForGuide.url}</strong> to your CRM, add this script to your form submission handler.
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-slate-700 mb-2">Endpoint URL</h4>
                                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 font-mono text-xs text-slate-800 break-all">
                                    {API_BASE_URL}/api/webhooks/collect/{encodeURIComponent(selectedPageForGuide.name.toLowerCase().replace(/\s+/g, '-'))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-slate-700 mb-2">Implementation Example</h4>
                                <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-slate-300 text-xs font-mono">
                                    <pre>{`const response = await fetch('${API_BASE_URL}/api/webhooks/collect/${encodeURIComponent(selectedPageForGuide.name.toLowerCase().replace(/\s+/g, '-'))}', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        ...formData,
        source: '${selectedPageForGuide.url}'
    }),
});`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Integration;
