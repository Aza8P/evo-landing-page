
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
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Athletes</span> Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 relative">
              <div className="text-4xl text-purple-400 mb-4">"</div>
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-purple-400">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
