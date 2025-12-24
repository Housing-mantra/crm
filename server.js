import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Lead from './models/Lead.js';
import Project from './models/Project.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saryu-crm';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist')); // Serve static files from Vite build

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes

// 1. Webhook to collect leads from landing pages
// URL: /api/webhooks/collect/:sourceName
app.post('/api/webhooks/collect/:sourceName', async (req, res) => {
    try {
        const { sourceName } = req.params;
        const { name, phone, email, budget, type, country_code, source } = req.body;

        // Basic validation
        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and Phone are required.' });
        }

        const newLead = new Lead({
            name,
            phone,
            email,
            budget,
            type: type || (req.body.configuration ? req.body.configuration : 'Unknown'), // Handle different field names
            country_code,
            source: source || sourceName, // Use provided source URL or param
            status: 'New'
        });

        await newLead.save();

        console.log(`📩 New Lead Received from ${sourceName}: ${name} (${phone})`);
        return res.status(201).json({ message: 'Lead captured successfully', lead: newLead });

    } catch (error) {
        console.error('Error saving lead:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 2. GET API to fetch all leads (for CRM Dashboard)
app.get('/api/leads', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ timestamp: -1 }); // Newest first
        res.json(leads);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 3. POST API to manually add a lead (from CRM Dashboard)
app.post('/api/leads', async (req, res) => {
    try {
        const { name, phone, email, budget, type, source, status } = req.body;

        const newLead = new Lead({
            name,
            phone,
            email,
            budget,
            type,
            source: source || 'Manual Entry',
            status: status || 'New'
        });

        await newLead.save();
        res.status(201).json(newLead);
    } catch (error) {
        console.error('Error adding lead:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 4. Project APIs
// GET /api/projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ timestamp: -1 });
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /api/projects
app.post('/api/projects', async (req, res) => {
    try {
        const { name, location, price, type, status, description } = req.body;
        const newProject = new Project({
            name,
            location,
            price,
            type,
            status,
            description
        });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 5. Catch-all route to serve React Frontend
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
