'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-brand-cream py-[50px] md:py-20">
      <div className="container">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-brand-gold font-script text-2xl md:text-3xl mb-3 block">Our Story</span>
          <h2 className="font-display font-bold uppercase text-brand-green text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide mb-8">
            ABOUT US
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto mb-12 rounded-full" />
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-brand-green text-lg md:text-xl leading-relaxed text-readable mx-auto">
              Chennai Central is a premium South Indian culinary destination dedicated to bringing the authentic flavors of tradition to your plate. We ensure that all our cuisines are prepared with fresh, high-quality ingredients and heritage recipes that have been passed down through generations.
            </p>
            <p className="font-body text-brand-green text-lg md:text-xl leading-relaxed text-readable mx-auto mt-6">
              At Chennai Central, we combine the efficiency of modern service with the soul of traditional Indian hospitality, creating an unforgettable dining experience for every guest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;