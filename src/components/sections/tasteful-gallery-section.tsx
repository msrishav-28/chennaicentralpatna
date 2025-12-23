'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const galleryImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic1-4.jpg?",
    alt: "South Indian Dish 1",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic2-5.jpg?",
    alt: "South Indian Dish 2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic3-6.jpg?",
    alt: "South Indian Dish 3",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic4-7.jpg?",
    alt: "South Indian Dish 4",
  },
];

const TastefulGallerySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-brand-cream py-20 border-y border-brand-green/10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div 
            ref={titleRef}
            className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-brand-gold font-script text-3xl mb-2 block">Authentic & Pure</span>
            <h3 className="font-display font-bold text-brand-green text-[3rem] lg:text-[4.5rem] leading-none uppercase tracking-tight">
              TASTEFUL
              <span className="block text-brand-gold text-[2rem] lg:text-[3rem] mt-2">EXPERIENCE</span>
            </h3>
            <div className="w-24 h-1 bg-brand-gold mt-6 mx-auto lg:mx-0 rounded-full"></div>
            <p className="mt-8 text-brand-green/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Indulge in a visual journey of our most celebrated dishes, prepared with passion and served with love.
            </p>
          </div>

          <div 
            ref={gridRef}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-1000 ${
                    gridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="aspect-square w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-3 bg-brand-white rounded-full text-brand-green transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-bold uppercase tracking-wider text-xs">View</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastefulGallerySection;