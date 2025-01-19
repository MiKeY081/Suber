import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActiveRide = () => {
  const [activeRide] = React.useState({
    driver: {
      name: 'Ram Bahadur',
      phone: '+977 9876543210',
      vehicle: {
        model: 'Honda Activa',
        color: 'Red',
        plate: 'BA 1 PA 2345'
      }
    },
    pickup: 'Thamel, Kathmandu',
    destination: 'Bouddha',
    status: 'in_progress'
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Current Ride</h2>
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            In Progress
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <div className="font-medium">{activeRide.driver.name}</div>
              <div className="text-sm text-gray-500">{activeRide.driver.vehicle.model} • {activeRide.driver.vehicle.color}</div>
              <div className="text-sm text-gray-500">{activeRide.driver.vehicle.plate}</div>
            </div>
            <Button variant="outline" className="ml-auto">
              Call Driver
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span>{activeRide.pickup}</span>
            </div>
            <div className="flex items-center">
              <Navigation className="h-5 w-5 text-primary mr-2" />
              <span>{activeRide.destination}</span>
            </div>
          </div>
        </div>

        <Button variant="destructive" className="w-full">
          Emergency SOS
        </Button>
      </div>
    </div>
  );
};

export default ActiveRide;