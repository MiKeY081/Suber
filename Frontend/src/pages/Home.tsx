import React from 'react';
import { Shield, Clock, Wallet } from 'lucide-react';
import BookingForm from '@/components/booking/BookingForm';
import FeatureCard from '@/components/features/FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'All rides are monitored and include an SOS button for emergencies.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description: 'Book a ride anytime, anywhere in Nepal.',
  },
  {
    icon: Wallet,
    title: 'Multiple Payment Options',
    description: 'Pay with cash, cards, or popular digital wallets.',
  },
];

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              Your Reliable Ride in Nepal
            </h1>
            <p className="text-lg mb-8">
              Book a ride instantly, track your driver in real-time, and travel safely across Nepal.
            </p>
            
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Suber?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;