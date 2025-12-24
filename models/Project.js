import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: String, // Keeping as string to allow ranges or "Starting at..."
        required: true
    },
    status: {
        type: String,
        enum: ['For Sale', 'Pending', 'Sold'],
        default: 'For Sale'
    },
    type: {
        type: String,
        enum: ['Residential', 'Commercial', 'Land'],
        default: 'Residential'
    },
    description: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Project', projectSchema);
