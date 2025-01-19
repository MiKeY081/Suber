import React, { useState } from 'react';
import LocationInput from '@/components/location/LocationInput';
import { Button } from '@/components/ui/button';

const BookingForm = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic
    console.log({ pickup, destination });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <LocationInput
        type="pickup"
        value={pickup}
        onChange={setPickup}
      />
      <LocationInput
        type="destination"
        value={destination}
        onChange={setDestination}
      />
      <Button type="submit" className="w-full">Book Now</Button>
    </form>
  );
};

export default BookingForm;