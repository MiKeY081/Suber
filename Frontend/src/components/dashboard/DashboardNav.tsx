import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Clock, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface DashboardNavProps {
  items: NavItem[];
}

const DashboardNav: React.FC<DashboardNavProps> = ({ items }) => {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              'flex items-center px-4 py-2 text-sm font-medium rounded-md',
              isActive
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:bg-gray-50'
            )
          }
        >
          <span className="mr-3 h-5 w-5">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default DashboardNav;