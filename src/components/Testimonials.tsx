
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "These stay up during every spin session – finally.",
      author: "Sarah M.",
      role: "Spin Instructor"
    },
    {
      quote: "I've never found tights this breathable.",
      author: "Jessica L.",
      role: "HIIT Enthusiast"
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Enhanced Holographic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-gray-400/3"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-gray-500/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Athletes</span> Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm relative group">
              <div className="text-4xl text-white mb-4">"</div>
              <p className="text-lg mb-6 italic text-gray-200">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center text-black font-semibold mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/3 to-gray-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
