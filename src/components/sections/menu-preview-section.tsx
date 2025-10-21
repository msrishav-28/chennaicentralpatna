'use client';

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MenuPreviewSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-background-light py-20">
      <div className="container">
        <div 
          ref={titleRef}
          className={`text-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-[48px] font-bold uppercase tracking-[1px] text-text-secondary">
            OUR MENU
          </h2>
        </div>
        <div className="mt-10">
          <div 
            ref={imageRef}
            className={`mx-auto max-w-[800px] transition-all duration-1000 ${
              imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"
              alt="The Rameshwaram Cafe Menu Preview"
              width={800}
              height={1271}
              className="h-auto w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
              loading="lazy"
            />
          </div>
        </div>
        <div 
          ref={buttonRef}
          className={`mt-10 text-center transition-all duration-1000 ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            href="/our-menu"
            className="inline-block rounded-[4px] bg-text-secondary px-10 py-4 text-[15px] font-semibold uppercase tracking-[1px] text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:bg-background-secondary shadow-lg hover:shadow-xl"
          >
            VIEW OUR COMPLETE MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;