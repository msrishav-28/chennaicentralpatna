import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green py-12 px-6 md:px-10 border-t border-brand-gold/20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-y-8 md:flex-row">
        <div className="text-center text-base leading-relaxed text-brand-white md:text-left">
          <p className="font-bold text-brand-gold uppercase tracking-widest mb-2 text-lg">Chennai Central</p>
          <p className="text-brand-white/90">
            Copyright © 2024 Chennai Central. All Rights Reserved
          </p>
        </div>
        
        <div className="flex items-center gap-x-8">
          <a
            href="#"
            aria-label="Follow us on Facebook"
            className="text-brand-white transition-all duration-300 hover:text-brand-gold hover:scale-125 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-full p-2"
          >
            <Facebook size={28} />
          </a>
          <a
            href="#"
            aria-label="Follow us on Twitter"
            className="text-brand-white transition-all duration-300 hover:text-brand-gold hover:scale-125 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-full p-2"
          >
            <Twitter size={28} />
          </a>
          <a
            href="#"
            aria-label="Follow us on Instagram"
            className="text-brand-white transition-all duration-300 hover:text-brand-gold hover:scale-125 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-full p-2"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;