import mongoose from 'mongoose';

const channelPartnerSchema = new mongoose.Schema({
    cpOwner: { type: String, default: 'Me' },
    cpFirmName: { type: String, required: true },
    contactPerson: { type: String },
    contact: { type: String, required: true },
    altContactNo: { type: String },
    cpEmail: { type: String },
    branch: { type: String },
    status: { type: String, required: true, default: 'Active' },
    location: { type: String },
    reraNo: { type: String },
    executiveName: { type: String },
    executiveMobNo: { type: String },
    addressType: { type: String },
    address: { type: String },
    leads: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }
});

const ChannelPartner = mongoose.model('ChannelPartner', channelPartnerSchema);

export default ChannelPartner;
