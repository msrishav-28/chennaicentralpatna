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
          <span className="text-brand-gold font-script text-2xl md:text-3xl mb-3 block">Taste of Tradition</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-brand-green mb-4">
            OUR MENU
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
          <p className="text-brand-green/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of authentic South Indian dishes, prepared with traditional recipes and the finest ingredients.
          </p>
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
            className="inline-block rounded-full bg-brand-green px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-gold hover:text-brand-green shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-gold/50"
            aria-label="View our complete menu - Navigate to menu page"
          >
            VIEW OUR COMPLETE MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;