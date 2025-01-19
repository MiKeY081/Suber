import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  // Redirect if already logged in
  if (user) {
    return <Navigate to={user.role === 'rider' ? '/rider' : '/driver'} />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      // Validate form
      if (!formData.email || !formData.password) {
        throw new Error('Please fill in all fields');
      }

      // Mock login - replace with actual API call
      const mockUser = {
        id: '1',
        email: formData.email,
        name: 'John Doe',
        phone: '+977 9812345678',
        role: 'rider' as const,
        created_at: new Date().toISOString(),
      };
      
      setUser(mockUser);
      toast.success('Login successful!');
      navigate(mockUser.role === 'rider' ? '/rider' : '/driver');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
          
          <div className="space-y-4">
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
              icon={<Lock className="h-5 w-5" />}
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Button variant="link" onClick={() => navigate('/register')} disabled={isLoading}>
              Register
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;