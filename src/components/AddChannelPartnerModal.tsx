import React, { useState, useEffect, useRef } from 'react';

interface AddChannelPartnerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (data: any) => void;
}

const AddChannelPartnerModal: React.FC<AddChannelPartnerModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        cpOwner: 'Me',
        cpFirmName: '',
        contactPerson: '',
        contact: '',
        altContactNo: '',
        cpEmail: '',
        branch: '',
        status: '',
        location: '',
        reraNo: '',
        executiveName: '',
        executiveMobNo: '',
        addressType: '',
        address: ''
    });

    // Address Autocomplete State
    const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
    const [isSearchingAddress, setIsSearchingAddress] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close suggestions when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'address' && value.length > 2) {
            handleAddressSearch(value);
        } else if (name === 'address') {
            setAddressSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleAddressSearch = async (query: string) => {
        setIsSearchingAddress(true);
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5&countrycodes=in`);
            const data = await response.json();
            setAddressSuggestions(data);
            setShowSuggestions(true);
        } catch (error) {
            console.error("Error fetching address suggestions:", error);
        } finally {
            setIsSearchingAddress(false);
        }
    };

    const selectAddress = (suggestion: any) => {
        setFormData(prev => ({ ...prev, address: suggestion.display_name }));
        setAddressSuggestions([]);
        setShowSuggestions(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSuccess(formData);
        onClose();
        // Reset form
        setFormData({
            cpOwner: 'Me',
            cpFirmName: '',
            contactPerson: '',
            contact: '',
            altContactNo: '',
            cpEmail: '',
            branch: '',
            status: '',
            location: '',
            reraNo: '',
            executiveName: '',
            executiveMobNo: '',
            addressType: '',
            address: ''
        });
        setAddressSuggestions([]);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
            <div className="bg-white shadow-2xl w-full max-w-3xl h-full overflow-hidden flex flex-col animate-slide-in-right">
                {/* Header Actions */}
                <div className="flex justify-end items-center gap-3 p-4 border-b border-slate-200 bg-slate-50">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors shadow-sm"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        Cancel
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* CP Information Section */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-2">CP Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Row 1 */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">CP Owner</label>
                                    <div className="relative">
                                        <select
                                            name="cpOwner"
                                            value={formData.cpOwner}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-700 bg-white appearance-none"
                                        >
                                            <option value="Me">Me</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        <span className="text-red-500 mr-1">*</span>CP Firm Name
                                    </label>
                                    <input
                                        type="text"
                                        name="cpFirmName"
                                        required
                                        value={formData.cpFirmName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div className="lg:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>

                                {/* Row 2 */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        <span className="text-red-500 mr-1">*</span>Contact
                                    </label>
                                    <input
                                        type="text"
                                        name="contact"
                                        required
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                        placeholder="Mobile Number"
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Alt Contact No</label>
                                    <input
                                        type="text"
                                        name="altContactNo"
                                        value={formData.altContactNo}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">CP Email</label>
                                    <input
                                        type="email"
                                        name="cpEmail"
                                        value={formData.cpEmail}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Branch</label>
                                    <select
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-700 bg-white"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Main">Main Branch</option>
                                        <option value="North">North Branch</option>
                                        <option value="South">South Branch</option>
                                    </select>
                                </div>

                                {/* Row 3 */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        <span className="text-red-500 mr-1">*</span>Status
                                    </label>
                                    <select
                                        name="status"
                                        required
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-700 bg-white"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Rera No</label>
                                    <input
                                        type="text"
                                        name="reraNo"
                                        value={formData.reraNo}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Executive Name</label>
                                    <input
                                        type="text"
                                        name="executiveName"
                                        value={formData.executiveName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>

                                {/* Row 4 */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Executive Mob. No</label>
                                    <input
                                        type="text"
                                        name="executiveMobNo"
                                        value={formData.executiveMobNo}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address Information Section */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-6 border-b pb-2">Address Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Address Type</label>
                                    <select
                                        name="addressType"
                                        value={formData.addressType}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-700 bg-white"
                                    >
                                        <option value="">Choose</option>
                                        <option value="Permanent Address">Permanent Address</option>
                                        <option value="Corresponding Address">Corresponding Address</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 relative" ref={wrapperRef}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            disabled={!formData.addressType}
                                            placeholder={!formData.addressType ? "Select Address Type first" : "Search specific address..."}
                                            className={`w-full px-3 py-2 border rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${!formData.addressType ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' : 'border-slate-300 bg-white'}`}
                                            autoComplete="off"
                                        />
                                        {isSearchingAddress && (
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                                <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Suggestions Dropdown */}
                                    {showSuggestions && addressSuggestions.length > 0 && (
                                        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {addressSuggestions.map((suggestion, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => selectAddress(suggestion)}
                                                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                                                >
                                                    {suggestion.display_name}
                                                </button>
                                            ))}
                                            <div className="px-2 py-1 text-[10px] text-right text-slate-400 bg-slate-50">
                                                Powered by OpenStreetMap
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddChannelPartnerModal;
