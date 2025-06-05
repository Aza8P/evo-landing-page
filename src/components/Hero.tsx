
import React from 'react';
import { Button } from '@/components/ui/button';

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
              High-performance tights designed specifically for indoor cycling & cardio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-gray-400 text-black px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all border border-white/20">
                ✅ Reserve Yours Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                💌 Join the Waitlist
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-gray-900/80 rounded-lg border border-white/20 backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-1">Expected retail: $55 USD</div>
              <div className="text-white font-semibold">Early supporters get exclusive pricing</div>
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
                poster="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://player.vimeo.com/external/518698046.sd.mp4?s=b56f06b58c95b69dc8af0a93a76b48b91be8dd3e&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Product Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-white font-semibold text-sm">ÉVO HIIT+ Tights</div>
                <div className="text-gray-300 text-xs">Pre-Release Edition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Urgency Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/20 via-gray-400/20 to-white/20 text-white text-center py-3 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <span className="text-sm font-semibold">🚨 Limited early production batch. Sign up to be the first in line.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
