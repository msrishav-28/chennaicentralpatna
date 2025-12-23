'use client';

import SidebarNavigation from '@/components/sections/sidebar-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesHeaderRef, isVisible: valuesHeaderVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesGridRef, isVisible: valuesGridVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation({ threshold: 0.2 });

    const values = [
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

    return (
      <div className="flex min-h-screen">
        <SidebarNavigation />
        
        <main className="w-full lg:ml-[300px]">
          {/* Hero Section */}
          <section className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide1-10.jpg?"
              alt="Chennai Central Hero"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-brand-green/60" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <span className="text-brand-gold font-script text-3xl mb-4 animate-fade-in">Discover Our Story</span>
              <h1 className="font-display text-5xl md:text-[80px] font-bold uppercase tracking-[4px] text-white animate-fade-in-down drop-shadow-2xl">
                ABOUT US
              </h1>
              <div className="h-1.5 w-32 bg-brand-gold mt-6 rounded-full animate-scale-in" />
            </div>
          </section>
  
          {/* About Content */}
          <section className="bg-brand-cream py-16 md:py-32">
            <div className="container">
              <div 
                ref={storyRef}
                className="max-w-[1000px] mx-auto"
              >
                <div className="text-center mb-16">
                  <span className="text-brand-gold font-script text-3xl mb-2 block">Tradition Meets Excellence</span>
                  <h2 className={`font-display text-[2.5rem] md:text-[3.5rem] font-bold uppercase tracking-[2px] text-brand-green mb-6 transition-all duration-1000 ${
                    storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    OUR STORY
                  </h2>
                  <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
                </div>
                
                <div className="space-y-8 text-brand-green/80 text-[1.15rem] leading-[2] text-center md:text-left">
                  {[
                    "Chennai Central is a premium South Indian culinary destination dedicated to bringing the authentic flavors of tradition to your plate. We ensure that all our cuisines are prepared with fresh, high-quality ingredients and heritage recipes that have been passed down through generations. At Chennai Central, we combine the efficiency of modern service with the soul of traditional Indian hospitality.",
                    "Our journey began with a simple mission: to bring authentic South Indian flavors to food lovers everywhere. We take pride in our traditional cooking methods, passed down through generations, combined with modern kitchen practices to ensure consistency and quality.",
                    "Every dish at Chennai Central tells a story of heritage, passion, and dedication. From our signature filter coffee to our crispy dosas and fluffy idlis, we strive to deliver an unforgettable culinary experience that transports you to the heart of South India."
                  ].map((text, index) => (
                    <p 
                      key={index}
                      className={`transition-all duration-1000 ${
                        storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          {/* Values Section */}
          <section className="relative py-24 md:py-32 overflow-hidden bg-brand-green">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/bg4-9.jpg?"
                alt="Background pattern"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className="relative z-10 container">
              <div className="text-center mb-20">
                <span className="text-brand-gold font-script text-3xl mb-2 block">The Pillars of</span>
                <h2 
                  ref={valuesHeaderRef}
                  className={`font-display text-[3rem] md:text-[4.5rem] font-bold uppercase tracking-widest text-white transition-all duration-1000 ${
                    valuesHeaderVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  Chennai Central
                </h2>
                <div className="h-1.5 w-40 bg-brand-gold mx-auto mt-6 rounded-full" />
              </div>
              
              <div 
                ref={valuesGridRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-y-12 gap-x-6 max-w-[1400px] mx-auto"
              >
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className={`text-center group transition-all duration-700 ${
                      valuesGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="text-[4rem] md:text-[5rem] font-bold text-brand-gold leading-none mb-4 transition-all duration-500 group-hover:scale-110 drop-shadow-lg">
                      {value.letter}
                    </div>
                    <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-white px-2">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Mission & Vision */}
          <section className="bg-brand-cream py-24 border-t border-brand-green/5">
            <div className="container">
              <div 
                ref={missionRef}
                className="grid md:grid-cols-2 gap-16 max-w-[1100px] mx-auto"
              >
                <div 
                  className={`bg-white p-12 rounded-3xl shadow-xl transition-all duration-1000 hover-lift ${
                    missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                    <div className="w-8 h-8 bg-brand-gold rounded-full" />
                  </div>
                  <h3 className="font-display text-[2.2rem] font-bold uppercase tracking-[1px] text-brand-green mb-6 text-center md:text-left">
                    Our Mission
                  </h3>
                  <p className="text-brand-green/70 text-[1.1rem] leading-[1.8] text-center md:text-left">
                    To serve authentic South Indian cuisine prepared with the finest ingredients and traditional recipes, ensuring every customer enjoys a memorable dining experience that celebrates our rich cultural heritage.
                  </p>
                </div>
                <div 
                  className={`bg-white p-12 rounded-3xl shadow-xl transition-all duration-1000 hover-lift ${
                    missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                    <div className="w-8 h-8 bg-brand-green rounded-full" />
                  </div>
                  <h3 className="font-display text-[2.2rem] font-bold uppercase tracking-[1px] text-brand-green mb-6 text-center md:text-left">
                    Our Vision
                  </h3>
                  <p className="text-brand-green/70 text-[1.1rem] leading-[1.8] text-center md:text-left">
                    To become the most trusted and beloved South Indian culinary destination, known for uncompromising quality, authentic flavors, and exceptional hospitality, while expanding our presence across communities.
                  </p>
                </div>
              </div>
            </div>
          </section>

        <Footer />
      </main>
    </div>
  );
}