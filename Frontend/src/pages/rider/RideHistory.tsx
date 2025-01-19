import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface RideHistoryItem {
  id: string;
  date: string;
  pickup: string;
  destination: string;
  fare: number;
  status: string;
}

const RideHistory = () => {
  const [rides] = React.useState<RideHistoryItem[]>([
    {
      id: '1',
      date: '2024-03-10',
      pickup: 'Thamel, Kathmandu',
      destination: 'Patan Durbar Square',
      fare: 350,
      status: 'completed'
    },
    // Add more ride history items
  ]);

  return (
    <div className="space-y-4">
      {rides.map((ride) => (
        <div key={ride.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="text-sm text-gray-500">{ride.date}</div>
            <div className={`px-2 py-1 rounded text-sm ${
              ride.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {ride.status}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span>{ride.pickup}</span>
            </div>
            <div className="flex items-center">
              <Navigation className="h-5 w-5 text-primary mr-2" />
              <span>{ride.destination}</span>
            </div>
          </div>
          
          <div className="mt-4 text-right">
            <span className="font-semibold">NPR {ride.fare}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RideHistory;