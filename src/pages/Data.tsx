import React, { useState } from 'react';
import { Search, Plus, X, Filter, Download, MoreHorizontal, Phone, Mail, MapPin } from 'lucide-react';
import AddDataModal from '../components/AddDataModal';

const Data = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Dummy Data
    const [dataEntries, setDataEntries] = useState([
        { id: 1, name: 'Vikram Singh', contact: '9876543210', email: 'vikram@example.com', status: 'New', source: 'Website', budget: '50L - 1Cr' },
        { id: 2, name: 'Anjali Gupta', contact: '9123456780', email: 'anjali@example.com', status: 'Contacted', source: 'Referral', budget: '1Cr - 1.5Cr' },
        { id: 3, name: 'Rohan Mehta', contact: '8899776655', email: 'rohan@example.com', status: 'Qualified', source: 'Walk-in', budget: '2Cr+' },
    ]);

    const handleAddData = (data: any) => {
        const newData = {
            id: dataEntries.length + 1,
            name: data.name,
            contact: data.contact,
            email: data.email,
            status: data.status || 'New',
            source: data.source || 'Direct',
            budget: data.budget || 'N/A'
        };
        setDataEntries([newData, ...dataEntries]);
        setIsAddModalOpen(false);
    };

    const filteredData = dataEntries.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.contact.includes(searchQuery)
    );

    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            {/* Header */}
            <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900">Enquiry Data</h2>

                <div className="flex items-center gap-3">
                    <div className="relative hidden md:block">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={18} />
                        </div>
                        <input
                            className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                            placeholder="Search data..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <button className="hidden sm:flex h-9 items-center justify-center gap-2 px-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                        <Download size={18} />
                        Export
                    </button>

                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex h-9 items-center justify-center gap-2 px-3 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">
                        <Plus size={18} />
                        Add Data
                    </button>
                </div>
            </header>

            {/* Data List (Table View) */}
            <div className="flex-1 overflow-auto p-6 md:p-8">
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full text-sm text-left text-slate-500">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-bold">Name</th>
                                <th className="px-6 py-4 font-bold">Contact</th>
                                <th className="px-6 py-4 font-bold">Status</th>
                                <th className="px-6 py-4 font-bold hidden md:table-cell">Source</th>
                                <th className="px-6 py-4 font-bold hidden md:table-cell">Budget</th>
                                <th className="px-6 py-4 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">
                                            <div className="flex flex-col">
                                                <span>{item.name}</span>
                                                <span className="text-[10px] text-slate-400 md:hidden">{item.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Phone size={14} className="text-slate-400" /> {item.contact}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${item.status === 'New' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                item.status === 'Contacted' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell">{item.source}</td>
                                        <td className="px-6 py-4 hidden md:table-cell">{item.budget}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-100">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                        No data found matching "{searchQuery}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Data Modal */}
            <AddDataModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSuccess={handleAddData}
            />
        </div>
    );
};

export default Data;
