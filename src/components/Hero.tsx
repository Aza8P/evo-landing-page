
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Holographic Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-gray-500/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.05),transparent,rgba(156,163,175,0.08),transparent)]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-gray-400/5"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text text-sm font-semibold tracking-wide uppercase mb-4">
              ÉVO Performance
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Made to Move.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Built to Perform.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              High-performance tights made for sweaty, high-intensity indoor workouts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button size="lg" className="bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-gray-400 text-black px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all border border-white/20">
                Reserve Yours Now
              </Button>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/50 border-white/20 text-white placeholder-gray-400 focus:border-white/50 backdrop-blur-sm px-4 py-6"
              />
            </div>
            
            <div className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-2">
              <span>🚨</span>
              <span>Early production batch. First come, first served.</span>
            </div>
          </div>
          
          {/* Hero Video */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border border-white/20">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-[400px] md:h-[600px] object-cover"
                poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://player.vimeo.com/external/518698046.sd.mp4?s=b56f06b58c95b69dc8af0a93a76b48b91be8dd3e&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Product Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-white font-semibold text-sm">ÉVO HIIT+ Tights</div>
                <div className="text-gray-300 text-xs">Navy with Light Green + White</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
