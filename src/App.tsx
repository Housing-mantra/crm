import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import './App.css';

function App() {
    // Simple state-based routing for now
    const [currentPage, setCurrentPage] = useState('dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard': return <Dashboard />;
            case 'leads': return <Leads />;
            default: return <Dashboard />;
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-main)' }}>
            {/* Pass setCurrentPage or handle navigation via Sidebar context/props in future */}
            {/* For this MVP check, we'll just hardcode Sidebar and let user know logic is pending or add props */}
            <Sidebar />

            {/* Temporary Navigation Override for Review */}
            <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100, display: 'flex', gap: 10 }}>
                <button
                    onClick={() => setCurrentPage('dashboard')}
                    style={{ padding: '10px 20px', background: currentPage === 'dashboard' ? '#136dec' : 'white', color: currentPage === 'dashboard' ? 'white' : 'black', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                >
                    Dashboard
                </button>
                <button
                    onClick={() => setCurrentPage('leads')}
                    style={{ padding: '10px 20px', background: currentPage === 'leads' ? '#136dec' : 'white', color: currentPage === 'leads' ? 'white' : 'black', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                >
                    Leads Pipeline
                </button>
            </div>

            {renderPage()}
        </div>
    );
}

export default App;
