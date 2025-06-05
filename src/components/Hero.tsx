
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-sm font-semibold tracking-wide uppercase mb-4">
              ÉVO Performance
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Made to Move.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Built to Perform.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
              High-performance tights designed specifically for indoor cycling & cardio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all">
                ✅ Reserve Yours Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg font-semibold">
                💌 Join the Waitlist
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-purple-500/30">
              <div className="text-sm text-slate-400 mb-1">Expected retail: $55 USD</div>
              <div className="text-purple-400 font-semibold">Early supporters get exclusive pricing</div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Woman in ÉVO Performance Pants on spin bike"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Product Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <div className="text-purple-400 font-semibold text-sm">ÉVO HIIT+ Tights</div>
                <div className="text-white text-xs">Pre-Release Edition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Urgency Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-purple-600 text-white text-center py-3 z-20">
        <div className="container mx-auto px-4">
          <span className="text-sm font-semibold">🚨 Limited early production batch. Sign up to be the first in line.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
