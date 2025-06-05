
import React from 'react';
import { Activity, Zap, Wind } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "No-slip stay-put waistband",
      description: "Engineered to stay in place during your most intense sessions",
      gradient: "from-white to-gray-300",
      animation: "hover:rotate-12"
    },
    {
      icon: Wind,
      title: "Sweat-wicking + fast-dry fabric",
      description: "Advanced moisture management keeps you cool and comfortable",
      gradient: "from-gray-200 to-gray-400",
      animation: "hover:scale-125"
    },
    {
      icon: Zap,
      title: "Sculpts without compressing",
      description: "Perfect balance of support and freedom of movement",
      gradient: "from-white to-gray-300",
      animation: "hover:-rotate-12"
    },
    {
      icon: Activity,
      title: "Built for spin bikes, HIIT, and sweaty indoor sessions",
      description: "Specifically designed for high-intensity indoor workouts",
      gradient: "from-gray-300 to-gray-500",
      animation: "hover:scale-110"
    },
    {
      icon: Wind,
      title: "Flat seams = no chafing",
      description: "Smooth construction eliminates irritation and discomfort",
      gradient: "from-white to-gray-400",
      animation: "hover:rotate-6"
    },
    {
      icon: Zap,
      title: "Tested by cardio lovers",
      description: "Real athletes, real feedback, real performance",
      gradient: "from-gray-200 to-gray-500",
      animation: "hover:-rotate-6"
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Enhanced Holographic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(255,255,255,0.03),transparent,rgba(156,163,175,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-gray-400/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every detail engineered for the athlete who demands more from their gear.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group bg-gray-900/50 p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className={`bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${feature.animation}`}>
                  <IconComponent size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white relative z-10">{feature.title}</h3>
                <p className="text-gray-300 text-sm relative z-10">{feature.description}</p>
                
                {/* Dynamic pulse effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-gray-400/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                
                {/* Movement lines for sports feel */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-white/50 mb-1 transform rotate-45"></div>
                  <div className="w-6 h-0.5 bg-white/30 mb-1 transform rotate-45"></div>
                  <div className="w-4 h-0.5 bg-white/20 transform rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Product Detail Image */}
        <div className="mt-20 text-center">
          <div className="inline-block relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1506629905607-bb5abbc4ddde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Close-up of ÉVO waistband and seam details"
              className="w-full max-w-2xl h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Precision-engineered details that make the difference</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
