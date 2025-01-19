import React from 'react';
import { Car, Palette, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const Vehicle = () => {
  const [vehicle, setVehicle] = React.useState({
    type: 'bike',
    model: 'Honda Activa',
    plateNumber: 'BA 1 PA 2345',
    color: 'Red'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Vehicle information updated successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant={vehicle.type === 'bike' ? 'default' : 'outline'}
              onClick={() => setVehicle({ ...vehicle, type: 'bike' })}
            >
              Bike
            </Button>
            <Button
              type="button"
              variant={vehicle.type === 'car' ? 'default' : 'outline'}
              onClick={() => setVehicle({ ...vehicle, type: 'car' })}
            >
              Car
            </Button>
          </div>

          <Input
            icon={<Car className="h-5 w-5" />}
            placeholder="Vehicle Model"
            value={vehicle.model}
            onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
          />
          <Input
            icon={<FileText className="h-5 w-5" />}
            placeholder="License Plate Number"
            value={vehicle.plateNumber}
            onChange={(e) => setVehicle({ ...vehicle, plateNumber: e.target.value })}
          />
          <Input
            icon={<Palette className="h-5 w-5" />}
            placeholder="Vehicle Color"
            value={vehicle.color}
            onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
          />
        </div>

        <Button type="submit" className="w-full">Update Vehicle Information</Button>
      </form>
    </div>
  );
};

export default Vehicle;