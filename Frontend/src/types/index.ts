export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  role: 'rider' | 'driver';
  created_at: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Ride {
  id: string;
  rider_id: string;
  driver_id?: string;
  pickup: Location;
  destination: Location;
  status: 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
  fare: number;
  created_at: string;
}

export interface Vehicle {
  id: string;
  driver_id: string;
  type: 'bike' | 'car' | 'premium';
  model: string;
  plate_number: string;
  color: string;
}