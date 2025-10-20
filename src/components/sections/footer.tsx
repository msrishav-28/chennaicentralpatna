import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] py-[30px] px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-y-4 md:flex-row">
        <div className="text-center text-[13px] leading-relaxed text-[#9ca3af] md:text-left">
          <p>
            Copyright © 2022 The Rameshwaram Cafe. All Rights Reserved
          </p>
          <p>
            Design By{' '}
            <a
              href="https://www.petpooja.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] hover:underline"
            >
              PETPOOJA
            </a>
          </p>
        </div>
        
        <div className="flex items-center gap-x-5">
          <a
            href="https://www.facebook.com/therameshwaramcafe/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] transition-colors hover:text-[#d97706]"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://mobile.twitter.com/RameshwaramCafe"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] transition-colors hover:text-[#d97706]"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com/therameshwaramcafe?igshid=YmMyMTA2M2Y="
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] transition-colors hover:text-[#d97706]"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;