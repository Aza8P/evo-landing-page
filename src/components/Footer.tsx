
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand Story */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              ÉVO
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              ÉVO is an independent brand making performance-driven essentials for cardio lovers. No fluff. Just gear that works.
            </p>
          </div>
          
          {/* Contact & Social */}
          <div className="text-right">
            <div className="space-y-3">
              <a href="mailto:hello@evo-performance.com" className="block text-white hover:text-gray-300 transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors">
                @evo_performance
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ÉVO Performance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
