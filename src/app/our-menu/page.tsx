'use client';

import SidebarNavigation from '@/components/sections/sidebar-navigation';
import MobileNavigation from '@/components/sections/mobile-navigation';
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
    <>
      <MobileNavigation />
      <div className="flex min-h-screen">
        <SidebarNavigation />
      
      <main id="main-content" className="w-full">
          {/* Hero Section */}
          <section className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide2-11.jpg?"
              alt="Chennai Central Menu"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-brand-green/60" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <span className="text-brand-gold font-script text-2xl md:text-3xl mb-6 animate-fade-in">Savor the Flavors</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white animate-fade-in-down drop-shadow-2xl max-w-4xl">
                OUR MENU
              </h1>
              <div className="h-1.5 w-32 bg-brand-gold mt-8 rounded-full animate-scale-in" />
              <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
                Explore our authentic South Indian cuisine, crafted with traditional recipes and served with love.
              </p>
            </div>
          </section>
  
          {/* Timing Badge */}
          <section className="bg-brand-cream py-10">
            <div className="container text-center">
              <div 
                ref={badgeRef}
                className={`inline-block bg-brand-green text-brand-white border-2 border-brand-gold px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg uppercase tracking-wide shadow-2xl transition-all duration-700 ${
                  badgeVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <span className="block text-sm md:text-base">Operating Hours</span>
                <span className="block text-lg md:text-xl font-bold mt-1">6:30am to 11:30am & 4pm to 1am</span>
              </div>
            </div>
          </section>
  
          {/* Menu Content */}
          <section className="bg-brand-cream py-16 md:py-24">
            <div className="container">
              <div className="max-w-[1000px] mx-auto">
                {/* Menu Image */}
                <div 
                  ref={imageRef}
                  className={`mb-24 transition-all duration-1000 ${
                    imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="relative p-4 bg-white rounded-2xl shadow-2xl">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"
                      alt="Chennai Central Complete Menu"
                      width={800}
                      height={1271}
                      className="h-auto w-full rounded-xl transition-transform duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
  
                {/* Menu Categories */}
                <div 
                  ref={categoriesRef}
                  className="grid md:grid-cols-2 gap-16"
                >
                  <div 
                    className={`bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-4 border-brand-gold transition-all duration-1000 ${
                      categoriesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-brand-green mb-8 text-center md:text-left">
                      Breakfast Specials
                    </h2>
                    <p className="text-brand-green/70 text-base md:text-lg mb-8 leading-relaxed">
                      Start your day with our authentic South Indian breakfast favorites, prepared fresh every morning.
                    </p>
                    <ul className="space-y-4 text-brand-green/80 text-base md:text-lg font-semibold">
                      {['VADA', 'IDLI', 'VEN PONGAL', 'KESARI BATH', 'UPMA', 'DOSA VARIETIES', 'FILTER COFFEE'].map((item, index) => (
                        <li 
                          key={item}
                          className="flex items-center gap-4 border-b border-brand-green/5 pb-4 transition-all duration-300 hover:translate-x-3 hover:text-brand-gold group"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
  
                  <div 
                    className={`bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-4 border-brand-gold transition-all duration-1000 ${
                      categoriesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-brand-green mb-8 text-center md:text-left">
                      All Day Favorites
                    </h2>
                    <p className="text-brand-green/70 text-base md:text-lg mb-8 leading-relaxed">
                      Enjoy our signature dishes throughout the day, each prepared with authentic spices and traditional methods.
                    </p>
                    <ul className="space-y-4 text-brand-green/80 text-base md:text-lg font-semibold">
                      {['MEALS THALI', 'CURD RICE', 'PULIYOGARE', 'BISIBELE BATH', 'GHEE RICE', 'SOUTH INDIAN THALI', 'BEVERAGES'].map((item, index) => (
                        <li 
                          key={item}
                          className="flex items-center gap-4 border-b border-brand-green/5 pb-4 transition-all duration-300 hover:translate-x-3 hover:text-brand-gold group"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
  
                {/* Note Section */}
                <div 
                  ref={noteRef}
                  className={`mt-20 p-8 md:p-12 bg-brand-green rounded-3xl text-white shadow-2xl transition-all duration-1000 ${
                    noteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-1 bg-brand-gold rounded-full" />
                    <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-wide text-brand-gold">
                      Important Note
                    </h3>
                  </div>
                  <p className="text-brand-white/90 text-lg md:text-xl leading-relaxed max-w-4xl">
                    All our dishes at Chennai Central are prepared fresh using authentic South Indian recipes and the finest quality ingredients. We maintain the highest standards of hygiene in our kitchen. For specific dietary requirements or allergen information, please speak to our staff who will be happy to assist you.
                  </p>
                </div>
  
                {/* CTA */}
                <div 
                  ref={ctaRef}
                  className={`mt-16 text-center transition-all duration-1000 ${
                    ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <a
                    href="/contact"
                    className="inline-block rounded-full bg-brand-green hover:bg-brand-gold text-brand-white hover:text-brand-green px-10 md:px-16 py-4 md:py-6 text-base md:text-lg font-bold uppercase tracking-wide transition-all duration-500 ease-in-out hover:scale-105 shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-gold/50"
                    aria-label="Visit us today - Navigate to contact page"
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
    </>
  );
}