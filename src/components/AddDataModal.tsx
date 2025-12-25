import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddDataModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (data: any) => void;
}

const AddDataModal: React.FC<AddDataModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const initialFormState = {
        owner: 'Me',
        name: '',
        contact: '',
        altContact: '',
        email: '',
        status: '',
        type: '',
        source: '',
        budget: '',
        occupation: '',
        purpose: '',
        address: '',
        remarks: '',
        project: '',
        lookingFor: '',
        propertyType: '',
        reqDetails: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSuccess(formData);
        onClose();
        setFormData(initialFormState);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
            <div className="bg-white shadow-2xl w-full max-w-4xl h-full overflow-hidden flex flex-col animate-slide-in-right">
                {/* Modal Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200 bg-slate-50">
                    <h3 className="text-lg font-bold text-slate-800">Add New Enquiry</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            Save
                        </button>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Enquiry Information Section */}
                        <section>
                            <h4 className="text-md font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Enquiry Information</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {/* Row 1 */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Enquiry Owner</label>
                                    <select
                                        name="owner"
                                        value={formData.owner}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    >
                                        <option value="Me">Me</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Enquiry Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Contact no <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Alt Contact</label>
                                    <input
                                        type="tel"
                                        name="altContact"
                                        value={formData.altContact}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>

                                {/* Row 2 */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Enquiry Status <span className="text-red-500">*</span></label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="New">New</option>
                                        <option value="Contacted">Contacted</option>
                                        <option value="Qualified">Qualified</option>
                                        <option value="Lost">Lost</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Enquiry Type <span className="text-red-500">*</span></label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Hot">Hot</option>
                                        <option value="Warm">Warm</option>
                                        <option value="Cold">Cold</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Enquiry Source <span className="text-red-500">*</span></label>
                                    <select
                                        name="source"
                                        value={formData.source}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Direct">Direct</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Referral">Referral</option>
                                    </select>
                                </div>

                                {/* Row 3 */}
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Budget</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="< 50L">&lt; 50L</option>
                                        <option value="50L - 1Cr">50L - 1Cr</option>
                                        <option value="> 1Cr">&gt; 1Cr</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Occupation</label>
                                    <select
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Salaried">Salaried</option>
                                        <option value="Business">Business</option>
                                        <option value="Self Employed">Self Employed</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Purpose</label>
                                    <select
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Investment">Investment</option>
                                        <option value="End Use">End Use</option>
                                    </select>
                                </div>
                            </div>

                            {/* Address - Full width */}
                            <div className="mt-6">
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="Type to search location..."
                                />
                            </div>

                            {/* Opening Remarks - Full width */}
                            <div className="mt-6">
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Opening Remarks</label>
                                <textarea
                                    name="remarks"
                                    value={formData.remarks}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary h-24 resize-none"
                                />
                            </div>
                        </section>

                        {/* Requirements Section */}
                        <section>
                            <h4 className="text-md font-bold text-slate-800 mb-6 border-b border-slate-200 pb-2">Requirements</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Projects</label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Project A">Project A</option>
                                        <option value="Project B">Project B</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Looking for</label>
                                    <select
                                        name="lookingFor"
                                        value={formData.lookingFor}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="1 BHK">1 BHK</option>
                                        <option value="2 BHK">2 BHK</option>
                                        <option value="3 BHK">3 BHK</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Property Type</label>
                                    <select
                                        name="propertyType"
                                        value={formData.propertyType}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-600"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Commercial">Commercial</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Requirement Details</label>
                                    <input
                                        type="text"
                                        name="reqDetails"
                                        value={formData.reqDetails}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDataModal;
