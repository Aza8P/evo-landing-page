
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

        {/* See Them in Action Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            See Them in Action
          </h3>
          <div className="inline-block relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full max-w-2xl h-[300px] md:h-[400px] object-cover"
              poster="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            >
              <source src="https://player.vimeo.com/external/518698046.sd.mp4?s=b56f06b58c95b69dc8af0a93a76b48b91be8dd3e&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Real spin class testing footage</p>
        </div>

        {/* Why We Made This Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Why We Made This
          </h3>
          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
            <p className="text-lg text-gray-200 leading-relaxed">
              We couldn't find tights that stayed in place during intense cardio… so we made them. 
              After countless sessions of adjusting, pulling, and being distracted by gear that couldn't 
              keep up, we decided to create performance wear that moves with you, not against you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
