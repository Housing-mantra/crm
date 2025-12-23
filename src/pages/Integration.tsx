import React from 'react';
import { Blocks, Link } from 'lucide-react';

const Integration: React.FC = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12">
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
            </div>
        </div>
    );
};

export default Integration;
