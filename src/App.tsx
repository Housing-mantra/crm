import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Calendar from './pages/Calendar';
import Projects from './pages/Projects';
import ChannelPartner from './pages/ChannelPartner';
import Data from './pages/Data';
import Integration from './pages/Integration';
import Reports from './pages/Reports';
import Login from './pages/Login';

const MainApp = () => {
    return (
        <div className="flex min-h-screen w-full bg-background-light">
            <Sidebar />
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="leads" element={<Leads />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="projects" element={<Projects />} />
                <Route path="channel-partner" element={<ChannelPartner />} />
                <Route path="data" element={<Data />} />
                <Route path="integration" element={<Integration />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<Navigate to="." replace />} />
            </Routes>
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
                path="/dashboard/*"
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
