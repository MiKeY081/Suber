import React from 'react';
import { User, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [profile, setProfile] = React.useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+977 9812345678'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update profile logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <Input
            icon={<User className="h-5 w-5" />}
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <Input
            icon={<Mail className="h-5 w-5" />}
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Input
            icon={<Phone className="h-5 w-5" />}
            placeholder="Phone Number"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full">Update Profile</Button>
      </form>
    </div>
  );
};

export default Profile;