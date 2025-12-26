import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green py-[40px] px-10 border-t border-brand-gold/20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-y-6 md:flex-row">
        <div className="text-center text-[14px] leading-relaxed text-brand-white md:text-left">
          <p className="font-bold text-brand-gold uppercase tracking-widest mb-1">Chennai Central</p>
          <p>
            Copyright © 2024 Chennai Central. All Rights Reserved
          </p>
        </div>
        
          <div className="flex items-center gap-x-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-brand-white transition-all duration-300 hover:text-brand-gold hover:scale-125"
              >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-brand-white transition-all duration-300 hover:text-brand-gold hover:scale-125"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-brand-white transition-all duration-300 hover:text-brand-gold hover:scale-125"
            >
              <Instagram size={24} />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;