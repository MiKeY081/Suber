import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface LocationInputProps {
  type: 'pickup' | 'destination';
  value: string;
  onChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ type, value, onChange }) => {
  return (
    <Input
      icon={type === 'pickup' ? <MapPin className="h-5 w-5" /> : <Navigation className="h-5 w-5" />}
      placeholder={`Enter ${type} location`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50"
    />
  );
};

export default LocationInput;