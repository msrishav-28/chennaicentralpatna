'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type ValueItemProps = {
  letter: string;
  text: string;
  colClass: string;
  delay: number;
  isVisible: boolean;
};

const valuesData: Omit<ValueItemProps, 'colClass' | 'delay' | 'isVisible'>[] = [
  { letter: 'C', text: 'Culinary Authenticity' },
  { letter: 'H', text: 'Heritage Recipes' },
  { letter: 'E', text: 'Exquisite Flavors' },
  { letter: 'N', text: 'Natural Ingredients' },
  { letter: 'N', text: 'Nourishing Meals' },
  { letter: 'A', text: 'Aroma of Tradition' },
  { letter: 'I', text: 'Indian Hospitality' },
  { letter: 'C', text: 'Consistent Quality' },
  { letter: 'E', text: 'Efficient Service' },
  { letter: 'N', text: 'Native Spices' },
  { letter: 'T', text: 'Traditional Techniques' },
  { letter: 'R', text: 'Rooted in Taste' },
  { letter: 'A', text: 'Affordable Excellence' },
  { letter: 'L', text: 'Local Favorites' },
];

const ValueItem: React.FC<ValueItemProps> = ({ letter, text, delay, isVisible }) => (
  <div 
    className="px-4 mb-[40px] transition-all duration-700 w-full sm:w-1/2 md:w-1/3 lg:w-[14.28%]"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
      transitionDelay: `${delay}ms`,
    }}
  >
    <div className="text-center text-white">
      <div className="mb-4">
        <span className="block text-brand-gold font-bold text-5xl md:text-6xl leading-none transition-transform duration-300 hover:scale-110 drop-shadow-md">
          {letter}
        </span>
      </div>
      <div>
        <h5 className="font-body text-sm md:text-base font-semibold leading-tight text-white uppercase tracking-wider">
          {text}
        </h5>
      </div>
    </div>
  </div>
);

const ValuesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative bg-brand-green py-[100px] min-h-[600px] overflow-hidden">
      <div className="relative z-10 container mx-auto px-4" ref={ref}>
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <span className="text-brand-gold font-script text-2xl md:text-3xl mb-3 block">Our Core</span>
          <h3 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
            Values
          </h3>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
          <p className="text-white/90 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Each letter of Chennai Central represents our commitment to authentic South Indian cuisine and exceptional hospitality.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {valuesData.map((item, index) => (
            <ValueItem
              key={index}
              letter={item.letter}
              text={item.text}
              colClass=""
              delay={index * 50}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;