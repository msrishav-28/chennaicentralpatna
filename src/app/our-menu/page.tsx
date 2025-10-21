'use client';

import SidebarNavigation from '@/components/sections/sidebar-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MenuPage() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="flex min-h-screen">
      <SidebarNavigation />
      
      <main className="w-full lg:ml-[300px]">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide2-11.jpg?"
            alt="The Rameshwaram Cafe Menu"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="font-display text-5xl md:text-[72px] font-bold uppercase tracking-[2px] text-white animate-fade-in-down">
              OUR MENU
            </h1>
          </div>
        </section>

        {/* Timing Badge */}
        <section className="bg-background-light py-8">
          <div className="container text-center">
            <div 
              ref={badgeRef}
              className={`inline-block bg-gradient-to-br from-accent-primary to-accent-secondary text-white px-8 py-3 rounded-[25px] font-semibold text-[15px] md:text-[17px] shadow-lg transition-all duration-700 ${
                badgeVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              6:30am to 11:30am & 4pm to 1am
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="bg-background-light py-16 md:py-20">
          <div className="container">
            <div className="max-w-[900px] mx-auto">
              {/* Menu Image */}
              <div 
                ref={imageRef}
                className={`mb-16 transition-all duration-1000 ${
                  imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"
                  alt="The Rameshwaram Cafe Complete Menu"
                  width={800}
                  height={1271}
                  className="h-auto w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
                  loading="lazy"
                />
              </div>

              {/* Menu Categories */}
              <div 
                ref={categoriesRef}
                className="grid md:grid-cols-2 gap-12"
              >
                <div 
                  className={`transition-all duration-1000 ${
                    categoriesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <h2 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent mb-6 text-center md:text-left">
                    Breakfast Specials
                  </h2>
                  <ul className="space-y-4 text-text-secondary text-[18px] font-semibold uppercase">
                    {['VADA', 'IDLI', 'VEN PONGAL', 'KESARI BATH', 'UPMA', 'DOSA VARIETIES', 'FILTER COFFEE'].map((item, index) => (
                      <li 
                        key={item}
                        className="border-b border-border-subtle pb-3 transition-all duration-300 hover:translate-x-2 hover:text-accent-primary"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className={`transition-all duration-1000 ${
                    categoriesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <h2 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent mb-6 text-center md:text-left">
                    All Day Favorites
                  </h2>
                  <ul className="space-y-4 text-text-secondary text-[18px] font-semibold uppercase">
                    {['MEALS THALI', 'CURD RICE', 'PULIYOGARE', 'BISIBELE BATH', 'GHEE RICE', 'SOUTH INDIAN THALI', 'BEVERAGES'].map((item, index) => (
                      <li 
                        key={item}
                        className="border-b border-border-subtle pb-3 transition-all duration-300 hover:translate-x-2 hover:text-accent-primary"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Note Section */}
              <div 
                ref={noteRef}
                className={`mt-16 p-8 bg-background-light-alt rounded-lg border-l-4 border-accent-primary transition-all duration-1000 ${
                  noteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="font-display text-[1.5rem] font-bold text-text-heading-accent mb-4">
                  Note
                </h3>
                <p className="text-text-tertiary text-[1.1rem] leading-[1.8]">
                  All our dishes are prepared fresh using authentic South Indian recipes and the finest quality ingredients. We maintain the highest standards of hygiene in our kitchen. For specific dietary requirements or allergen information, please speak to our staff.
                </p>
              </div>

              {/* CTA */}
              <div 
                ref={ctaRef}
                className={`mt-12 text-center transition-all duration-1000 ${
                  ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <a
                  href="/contact"
                  className="inline-block rounded-[4px] bg-accent-primary hover:bg-accent-tertiary text-primary-foreground px-12 py-4 text-[15px] font-semibold uppercase tracking-[1px] transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_4px_12px_rgba(200,117,51,0.3)] hover:shadow-[0_6px_16px_rgba(200,117,51,0.4)]"
                >
                  VISIT US TODAY
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}