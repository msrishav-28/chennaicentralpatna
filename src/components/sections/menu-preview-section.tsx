'use client';

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MenuPreviewSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-brand-cream py-20">
      <div className="container">
        <div 
          ref={titleRef}
          className={`text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-brand-gold font-script text-3xl mb-2 block">Taste of Tradition</span>
          <h2 className="font-display text-[48px] font-bold uppercase tracking-[1px] text-brand-green">
            OUR MENU
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto mt-2 rounded-full" />
        </div>
        <div className="mt-16">
          <div 
            ref={imageRef}
            className={`mx-auto max-w-[800px] transition-all duration-1000 ${
              imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative group overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"
                alt="Chennai Central Menu Preview"
                width={800}
                height={1271}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-brand-green/0 transition-colors duration-500" />
            </div>
          </div>
        </div>
        <div 
          ref={buttonRef}
          className={`mt-16 text-center transition-all duration-1000 ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            href="/our-menu"
            className="inline-block rounded-full bg-brand-green px-10 py-4 text-[15px] font-bold uppercase tracking-[1px] text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-gold hover:text-brand-green shadow-xl hover:shadow-2xl"
          >
            VIEW OUR COMPLETE MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;