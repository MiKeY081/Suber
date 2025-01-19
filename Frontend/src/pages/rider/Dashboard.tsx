import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { User, Clock, MapPin } from 'lucide-react';
import DashboardNav from '@/components/dashboard/DashboardNav';
import RideHistory from './RideHistory';
import ActiveRide from './ActiveRide';
import Profile from './Profile';

const RiderDashboard = () => {
  const location = useLocation();
  const navItems = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Active Ride',
      href: '/rider'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Ride History',
      href: '/rider/history'
    },
    {
      icon: <User className="h-5 w-5" />,
      label: 'Profile',
      href: '/rider/profile'
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
            <Route path="/" element={<ActiveRide />} />
            <Route path="/history" element={<RideHistory />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;