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
          <span className="text-brand-gold font-script text-3xl mb-2 block">Our Story</span>
          <h2 className="font-display font-bold uppercase text-brand-green text-[2rem] leading-tight tracking-[1px] md:text-[3rem] mb-10">
            ABOUT US
          </h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto -mt-6 mb-10 rounded-full" />
          <p className="max-w-[900px] mx-auto font-body text-brand-green/80 text-[1.1rem] leading-[1.8]">
            Chennai Central is a premium South Indian culinary destination dedicated to bringing the authentic flavors of tradition to your plate. We ensure that all our cuisines are prepared with fresh, high-quality ingredients and heritage recipes that have been passed down through generations. At Chennai Central, we combine the efficiency of modern service with the soul of traditional Indian hospitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;