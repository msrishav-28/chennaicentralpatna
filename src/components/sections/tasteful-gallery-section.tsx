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
    <section className="bg-[#fdf5f0] py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div 
            ref={titleRef}
            className={`w-full lg:w-1/2 text-center transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="font-script text-accent-secondary text-[2rem] leading-none mb-2">
              Authentic
            </h2>
            <h3 className="font-display font-bold text-text-heading-accent text-[2.5rem] lg:text-[4rem] leading-tight uppercase">
              TASTEFUL
            </h3>
            <div className="w-20 h-[2px] bg-accent-secondary mx-auto mt-4"></div>
          </div>

          <div 
            ref={gridRef}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-5">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
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
                    className="aspect-square w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                    loading="lazy"
                  />
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