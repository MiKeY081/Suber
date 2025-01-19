import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'rider' as 'rider' | 'driver',
  });

  // Redirect if already logged in
  if (user) {
    return <Navigate to={user.role === 'rider' ? '/rider' : '/driver'} />;
  }

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      throw new Error('Please fill in all fields');
    }
    if (!formData.email.includes('@')) {
      throw new Error('Please enter a valid email address');
    }
    if (formData.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    if (!formData.phone.match(/^\+?[\d\s-]+$/)) {
      throw new Error('Please enter a valid phone number');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      validateForm();
      
      // Mock registration - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          
          <div className="space-y-4">
            <Input
              icon={<User className="h-5 w-5" />}
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isLoading}
            />
            <Input
              icon={<Mail className="h-5 w-5" />}
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isLoading}
            />
            <Input
              icon={<Phone className="h-5 w-5" />}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              disabled={isLoading}
            />
            <Input
              icon={<Lock className="h-5 w-5" />}
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              disabled={isLoading}
            />
            
            <div className="flex gap-4">
              <Button
                type="button"
                variant={formData.role === 'rider' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setFormData({ ...formData, role: 'rider' })}
                disabled={isLoading}
              >
                Rider
              </Button>
              <Button
                type="button"
                variant={formData.role === 'driver' ? 'default' : 'outline'}
                className="flex-1"
                onClick={() => setFormData({ ...formData, role: 'driver' })}
                disabled={isLoading}
              >
                Driver
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Register'}
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Button variant="link" onClick={() => navigate('/login')} disabled={isLoading}>
              Login
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;