import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Car, Clock, User, Settings } from 'lucide-react';
import DashboardNav from '@/components/dashboard/DashboardNav';
import ActiveRides from './ActiveRides';
import RideHistory from './RideHistory';
import Profile from './Profile';
import Vehicle from './Vehicle';

const DriverDashboard = () => {
  const navItems = [
    {
      icon: <Car className="h-5 w-5" />,
      label: 'Active Rides',
      href: '/driver'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Ride History',
      href: '/driver/history'
    },
    {
      icon: <User className="h-5 w-5" />,
      label: 'Profile',
      href: '/driver/profile'
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: 'Vehicle',
      href: '/driver/vehicle'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <DashboardNav items={navItems} />
        </div>
        <div className="col-span-9">
          <Routes>
            <Route path="/" element={<ActiveRides />} />
            <Route path="/history" element={<RideHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/vehicle" element={<Vehicle />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;