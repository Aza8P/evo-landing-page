
import React from 'react';
import { Shield, Droplets, Zap, Target, Scissors, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "No-slip stay-put waistband",
      description: "Engineered to stay in place during your most intense sessions"
    },
    {
      icon: Droplets,
      title: "Sweat-wicking + fast-dry fabric",
      description: "Advanced moisture management keeps you cool and comfortable"
    },
    {
      icon: Zap,
      title: "Sculpts without compressing",
      description: "Perfect balance of support and freedom of movement"
    },
    {
      icon: Target,
      title: "Built for spin bikes, HIIT, and sweaty indoor sessions",
      description: "Specifically designed for high-intensity indoor workouts"
    },
    {
      icon: Scissors,
      title: "Flat seams = no chafing",
      description: "Smooth construction eliminates irritation and discomfort"
    },
    {
      icon: Heart,
      title: "Tested by cardio lovers",
      description: "Real athletes, real feedback, real performance"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Every detail engineered for the athlete who demands more from their gear.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-purple-400">{feature.title}</h3>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Product Detail Image */}
        <div className="mt-20 text-center">
          <div className="inline-block relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506629905607-bb5abbc4ddde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Close-up of ÉVO waistband and seam details"
              className="w-full max-w-2xl h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30"></div>
          </div>
          <p className="text-slate-400 text-sm mt-4">Precision-engineered details that make the difference</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
