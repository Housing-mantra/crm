import React from 'react';
import { Users, UserPlus } from 'lucide-react';

const ChannelPartner: React.FC = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Channel Partners</h1>
                <p className="text-slate-500 mt-2">Manage your relationships with channel partners and agents.</p>
            </header>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Channel Partners Found</h3>
                <p className="text-slate-500 max-w-md text-center">Start adding your channel partners to track their performance and leads.</p>
                <button className="mt-6 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600 flex items-center gap-2">
                    <UserPlus size={18} />
                    Add Channel Partner
                </button>
            </div>
        </div>
    );
};

export default ChannelPartner;
