"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide1-10.jpg?",
        title: "WELCOME!",
        subtitle: "Chennai Central",
        ctaText: "CONTACT US",
        ctaLink: "/contact"
    },
    {
        imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide2-11.jpg?",
        title: "WELCOME!",
        subtitle: "Chennai Central",
        ctaText: "CONTACT US",
        ctaLink: "/contact"
    }
];

const loadingGif = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/loading-8.gif?";

export default function HeroCarousel() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
      if (!isLoading && !isPaused) {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
      }
    }, [isLoading, isPaused, nextSlide]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-brand-cream z-[999999999]">
                <div className="flex flex-col items-center">
                    <Image src={loadingGif} alt="Loading..." width={64} height={64} unoptimized />
                    <p className="mt-4 font-display text-brand-green font-bold tracking-widest animate-pulse">CHENNAI CENTRAL</p>
                </div>
            </div>
        );
    }

    return (
        <section 
          className="relative w-full h-[70vh] lg:h-screen overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'}`}
                    aria-hidden={index !== currentSlide}
                >
                    <Image
                        src={slide.imageUrl}
                        alt="Chennai Central Hero Background"
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-brand-green/60" />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                        <h1 className="font-display text-6xl md:text-[100px] font-bold uppercase tracking-[8px] mb-5 animate-fade-in-down drop-shadow-2xl">
                            {slide.title}
                        </h1>
                        <p className="font-script text-4xl md:text-[56px] mb-10 text-brand-gold animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                            {slide.subtitle}
                        </p>
                        <a
                            href={slide.ctaLink}
                            className="bg-brand-gold hover:bg-white text-brand-green font-body font-bold text-[15px] uppercase tracking-[2px] px-12 py-5 rounded-full shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            {slide.ctaText}
                        </a>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 md:left-8 -translate-y-1/2 z-30 text-white/70 hover:text-brand-gold hover:scale-125 transition-all duration-300 p-3 bg-brand-green/20 hover:bg-brand-green/40 rounded-full backdrop-blur-sm border border-white/10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 md:right-8 -translate-y-1/2 z-30 text-white/70 hover:text-brand-gold hover:scale-125 transition-all duration-300 p-3 bg-brand-green/20 hover:bg-brand-green/40 rounded-full backdrop-blur-sm border border-white/10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${
                            index === currentSlide 
                                ? 'bg-brand-gold w-16' 
                                : 'bg-white/30 w-8 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}