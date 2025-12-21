import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Login from './pages/Login';

const MainApp = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard': return <Dashboard />;
            case 'leads': return <Leads />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-background-light">
            <Sidebar onNavigate={setCurrentPage} activePage={currentPage} />
            {renderPage()}
        </div>
    );
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <MainApp />
                    </PrivateRoute>
                }
            />
            {/* Redirect any unknown route to home (login) */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
