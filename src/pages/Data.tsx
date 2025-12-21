import React from 'react';

const Data = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-12">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Data Management</h1>
                <p className="text-slate-500 mt-2">Manage and import your real estate data sources.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-700 mb-2">Import CSV</h3>
                    <p className="text-sm text-slate-500 mb-4">Upload bulk data from CSV files.</p>
                    <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600">Upload File</button>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-700 mb-2">Export Data</h3>
                    <p className="text-sm text-slate-500 mb-4">Download your current dataset.</p>
                    <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50">Export All</button>
                </div>
            </div>
        </div>
    );
};

export default Data;
