import React, { useState } from 'react';
import { Users, Search, Phone, Mail, MapPin, MoreHorizontal, Plus, X } from 'lucide-react';
import AddChannelPartnerModal from '../components/AddChannelPartnerModal';

const ChannelPartner: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Dummy Data State
    const [partners, setPartners] = useState([
        { id: 1, name: 'Rahul Sharma', company: 'Sharma Estates', phone: '+91 98765 43210', email: 'rahul@sharmaestates.com', location: 'Mumbai', status: 'Active', leads: 12 },
        { id: 2, name: 'Priya Verma', company: 'Prime Realty', phone: '+91 98989 89898', email: 'priya@primerealty.in', location: 'Bangalore', status: 'Active', leads: 8 },
        { id: 3, name: 'Amit Kumar', company: 'Dream Homes', phone: '+91 91234 56789', email: 'amit@dreamhomes.co', location: 'Delhi', status: 'Inactive', leads: 3 },
    ]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredPartners = partners.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light">
            <header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex-shrink-0">
                <h2 className="text-lg font-bold text-slate-900">Channel Partners</h2>

                <div className="flex items-center gap-3">
                    <div className="relative hidden md:block">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search size={18} />
                        </div>
                        <input
                            className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                            placeholder="Search partners..."
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex h-9 items-center justify-center gap-2 px-3 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">
                        <Plus size={18} />
                        Add Partner
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {filteredPartners.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPartners.map((partner) => (
                            <div key={partner.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3">
                                            <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                                                {partner.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 text-sm">{partner.name}</h3>
                                                <p className="text-xs text-slate-500 font-medium">{partner.company}</p>
                                            </div>
                                        </div>
                                        <div className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${partner.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                                            {partner.status}
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <Phone size={14} className="text-slate-400" />
                                            {partner.phone}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <Mail size={14} className="text-slate-400" />
                                            <span className="truncate">{partner.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                            <MapPin size={14} className="text-slate-400" />
                                            {partner.location}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-bold">Leads</p>
                                            <p className="text-sm font-bold text-slate-800">{partner.leads}</p>
                                        </div>
                                        <button className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-50">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                        <Users size={48} className="mb-4 text-slate-300" />
                        <p>No partners found matching "{searchQuery}"</p>
                    </div>
                )}
            </div>

            {/* Add Partner Modal */}
            {/* Add Partner Modal */}
            <AddChannelPartnerModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSuccess={(data) => {
                    const newPartnerEntry = {
                        id: partners.length + 1,
                        name: data.contactPerson || data.cpFirmName,
                        company: data.cpFirmName,
                        phone: data.contact,
                        email: data.cpEmail,
                        location: data.location || 'Unknown',
                        status: data.status,
                        leads: 0 // Default
                    };
                    setPartners([newPartnerEntry, ...partners]);
                    setIsAddModalOpen(false);
                }}
            />
        </div>
    );
};

export default ChannelPartner;
