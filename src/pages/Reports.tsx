import React from 'react';

const Reports = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Reports & Analytics</h1>
                <p className="text-slate-500 mt-2">View performance metrics and sales reports.</p>
            </header>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Reports Generated</h3>
                <p className="text-slate-500 max-w-md text-center">Analytics data will appear here once you have sufficient lead and property activity.</p>
                <button className="mt-6 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600">Generate Custom Report</button>
            </div>
        </div>
    );
};

export default Reports;
