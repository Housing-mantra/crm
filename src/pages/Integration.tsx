import React, { useState } from 'react';
import { Blocks, Link, Layout, X } from 'lucide-react';

const Integration: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPageForGuide, setSelectedPageForGuide] = useState<{ name: string; url: string } | null>(null);
    // Load initial state from localStorage if available
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

    // Save to localStorage whenever landingPages changes
    React.useEffect(() => {
        localStorage.setItem('crm_landing_pages', JSON.stringify(landingPages));
    }, [landingPages]);

    const [formData, setFormData] = useState({ name: '', url: '' });

    const handleConnectClick = () => {
        setIsModalOpen(true);
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

    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12 relative">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Integrations</h1>
                <p className="text-slate-500 mt-2">Connect with third-party tools and services.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center">
                            <Blocks className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">WhatsApp</h3>
                            <p className="text-xs text-slate-500">Messaging</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Connect WhatsApp Business API to send automated messages and follow-ups.</p>
                    <button className="w-full py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50">Configure</button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Link className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Facebook Ads</h3>
                            <p className="text-xs text-slate-500">Marketing</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Sync leads directly from Facebook Lead Ads to your CRM.</p>
                    <button className="w-full py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600">Connect</button>
                </div>

                {/* Landing Page Integration Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center">
                            <Layout className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Landing Page</h3>
                            <p className="text-xs text-slate-500">Lead Capture</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Connect your landing pages to automatically capture incoming leads.</p>
                    <button
                        onClick={handleConnectClick}
                        className="w-full py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600"
                    >
                        Connect
                    </button>
                </div>
            </div>

            {/* Display Added Landing Pages */}
            {landingPages.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Connected Landing Pages</h2>
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
                                            <button className="text-red-600 hover:text-red-900 text-sm font-medium">Disconnect</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Add Page Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800">Add Landing Page</h3>
                            <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Landing Page Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary outline-none"
                                    placeholder="e.g. Summer Campaign"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Page URL</label>
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
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800">Integration Setup: {selectedPageForGuide.name}</h3>
                            <button onClick={() => setSelectedPageForGuide(null)} className="text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            <p className="text-sm text-slate-600 mb-4">
                                To send leads from <strong>{selectedPageForGuide.url}</strong> to your CRM, you need to add this script to your website's contact form submission handler.
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-slate-700 mb-2">Step 1: Your Webhook URL</h4>
                                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 font-mono text-xs text-slate-800 break-all">
                                    {window.location.origin}/api/webhooks/collect/{encodeURIComponent(selectedPageForGuide.name.toLowerCase().replace(/\s+/g, '-'))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-slate-700 mb-2">Step 2: JavaScript Code</h4>
                                <p className="text-xs text-slate-500 mb-2">Copy and paste this code into your website's script tags. Call this function when your form is submitted.</p>
                                <div className="bg-slate-800 p-4 rounded-lg overflow-x-auto text-slate-300 text-xs font-mono">
                                    <pre>{`// Example: Handling form submission
document.querySelector('#contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('${window.location.origin}/api/webhooks/collect/${encodeURIComponent(selectedPageForGuide.name.toLowerCase().replace(/\s+/g, '-'))}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                source: '${selectedPageForGuide.url}'
            }),
        });

        if (response.ok) {
            alert('Lead submitted successfully!');
        }
    } catch (error) {
        console.error('Error submitting lead:', error);
    }
});`}</pre>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                                <h4 className="text-sm font-bold text-blue-800 mb-1">Need Help?</h4>
                                <p className="text-xs text-blue-600">
                                    If you are using WordPress, Wix, or another CMS, you might need our plugin or zapier integration. Contact support for assistance.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
                            <button
                                onClick={() => setSelectedPageForGuide(null)}
                                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Integration;
