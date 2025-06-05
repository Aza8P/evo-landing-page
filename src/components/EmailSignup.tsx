
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You're on the list! We'll notify you when ÉVO HIIT+ Tights are available.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Enhanced Holographic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-gray-400/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent,rgba(255,255,255,0.05),transparent,rgba(156,163,175,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-gray-400/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Early Access</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to experience performance that moves with you.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-900/50 border-white/20 text-white placeholder-gray-400 focus:border-white/50 backdrop-blur-sm"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-gray-400 text-black px-8 py-2 font-semibold whitespace-nowrap border border-white/20"
            >
              Get Early Access
            </Button>
          </form>
          
          <div className="text-sm text-gray-400">
            We'll only email you with updates about this launch.
          </div>
        </div>
        
        {/* Mock-up Image */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="ÉVO Performance Pants folded with packaging"
              className="w-full max-w-lg h-[300px] object-cover rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
