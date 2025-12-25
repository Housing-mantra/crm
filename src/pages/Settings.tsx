import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900">Settings</h2>
            </header>
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <p className="text-slate-500">Settings configuration coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
