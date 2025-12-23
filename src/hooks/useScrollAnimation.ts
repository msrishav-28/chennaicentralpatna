'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export type AnimationType = 
  | 'fade-in' 
  | 'fade-in-up' 
  | 'fade-in-down' 
  | 'slide-in-left' 
  | 'slide-in-right' 
  | 'scale-in'
  | 'blur-in';

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const getAnimationClass = (type: AnimationType = 'fade-in-up', delay: number = 0) => {
    if (!isVisible) return 'opacity-0';
    
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';
    return `animate-${type} ${delayClass} opacity-100`;
  };

  return { ref, isVisible, getAnimationClass };
};

export const useStaggerAnimation = (count: number, options: UseScrollAnimationOptions = {}) => {
  const { ref, isVisible } = useScrollAnimation(options);
  
  return {
    ref,
    isVisible,
    getItemProps: (index: number, type: AnimationType = 'fade-in-up') => ({
      className: `transition-all duration-700 ${
        isVisible ? `animate-${type} opacity-100` : 'opacity-0'
      }`,
      style: {
        animationDelay: `${index * 100}ms`,
      },
    }),
  };
};
