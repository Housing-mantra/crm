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
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%', backgroundColor: 'var(--color-bg-main)' }}>
            <Sidebar onNavigate={setCurrentPage} activePage={currentPage} />
            {renderPage()}
        </div>
    );
}

export default App;
