"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide1-10.jpg?",
        title: "WELCOME!",
        subtitle: "The Rameshwaram Cafe",
        ctaText: "CONTACT US",
        ctaLink: "/contact"
    },
    {
        imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide2-11.jpg?",
        title: "WELCOME!",
        subtitle: "The Rameshwaram Cafe",
        ctaText: "CONTACT US",
        ctaLink: "/contact"
    }
];

const loadingGif = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/loading-8.gif?";

export default function HeroCarousel() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

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
      if (!isLoading) {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
      }
    }, [isLoading, nextSlide]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-[#faf3eb] z-[999999999]">
                <Image src={loadingGif} alt="Loading..." width={64} height={64} unoptimized />
            </div>
        );
    }

    return (
        <section className="relative w-full h-[70vh] lg:h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'}`}
                    aria-hidden={index !== currentSlide}
                >
                    <Image
                        src={slide.imageUrl}
                        alt="Architectural temple corridor background"
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                        <h1 className="font-display text-5xl md:text-[72px] font-bold uppercase tracking-[2px] mb-5 animate-fade-in-down">
                            {slide.title}
                        </h1>
                        <p className="font-script text-3xl md:text-[42px] mb-10 text-white animate-fade-in-up">
                            {slide.subtitle}
                        </p>
                        <a
                            href={slide.ctaLink}
                            className="bg-primary hover:bg-accent-tertiary text-primary-foreground font-body font-semibold text-[15px] uppercase tracking-[1px] px-10 py-4 rounded-[4px] shadow-[0_4px_12px_rgba(200,117,51,0.3)] transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(200,117,51,0.4)] animate-fade-in-up"
                        >
                            {slide.ctaText}
                        </a>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 md:left-8 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 md:right-8 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Next slide"
            >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
        </section>
    );
}