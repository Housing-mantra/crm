import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    budget: {
        type: String,
        required: false
    },
    type: {
        type: String, // e.g., '2 BHK', '3 BHK', etc.
        required: false
    },
    source: {
        type: String, // URL or campaign name
        required: true
    },
    status: {
        type: String,
        enum: ['New', 'Contacted', 'Qualified', 'Lost', 'Won'],
        default: 'New'
    },
    country_code: {
        type: String,
        default: '+91'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Avoid recompiling model if it already exists
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default Lead;
