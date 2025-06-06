
import React from 'react';
import Hero from '@/components/Hero';
import Features3D from '@/components/Features3D';
import Testimonials from '@/components/Testimonials';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features3D />
      <Testimonials />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
