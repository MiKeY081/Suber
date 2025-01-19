import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RiderDashboard from './pages/rider/Dashboard';
import DriverDashboard from './pages/driver/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/rider/*" 
            element={user?.role === 'rider' ? <RiderDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/driver/*" 
            element={user?.role === 'driver' ? <DriverDashboard /> : <Navigate to="/login" />} 
          />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;