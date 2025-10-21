import SidebarNavigation from '@/components/sections/sidebar-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen">
      <SidebarNavigation />
      
      <main className="w-full lg:ml-[300px]">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide1-10.jpg?"
            alt="The Rameshwaram Cafe"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="font-display text-5xl md:text-[72px] font-bold uppercase tracking-[2px] text-white">
              ABOUT US
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="bg-background-light py-16 md:py-24">
          <div className="container">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-display text-[2rem] md:text-[3rem] font-bold uppercase tracking-[1px] text-text-secondary text-center mb-10">
                OUR STORY
              </h2>
              <div className="space-y-6 text-text-tertiary text-[1.1rem] leading-[1.8]">
                <p>
                  The Rameshwaram Cafe is a premium South Indian chain of QSR module and is a trademark registered brand under the mother company M/s. Altran Ventures Pvt. Ltd. At The Rameshwaram Café it is ensured that all the cuisines are prepared on-the-go and served hot to customers using the best and fresh high-quality ingredients, authentic recipes with the highest hygiene standards.
                </p>
                <p>
                  Our journey began with a simple mission: to bring authentic South Indian flavors to food lovers everywhere. We take pride in our traditional cooking methods, passed down through generations, combined with modern kitchen practices to ensure consistency and quality.
                </p>
                <p>
                  Every dish at The Rameshwaram Cafe tells a story of heritage, passion, and dedication. From our signature filter coffee to our crispy dosas and fluffy idlis, we strive to deliver an unforgettable culinary experience that transports you to the heart of South India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/bg4-9.jpg?"
            alt="South Indian dishes"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/70" />
          
          <div className="relative z-10 container">
            <h2 className="font-script text-[3rem] md:text-[4rem] text-white text-center mb-16">
              Our Values
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 max-w-[1200px] mx-auto">
              {[
                { letter: 'R', text: 'Reliable Brand Experience' },
                { letter: 'A', text: 'Attention To Details' },
                { letter: 'M', text: 'Maintaining Hygiene' },
                { letter: 'E', text: 'Ensuring Exceptional Hospitality' },
                { letter: 'S', text: 'Serving Authentic South Indian Cuisines' },
                { letter: 'H', text: 'Honouring The Ethos' },
                { letter: 'W', text: 'Welcoming Approach' },
                { letter: 'A', text: 'Assurance of Quality' },
                { letter: 'R', text: 'Respect For Tradition' },
                { letter: 'A', text: 'Aspiration For Excellence' },
                { letter: 'M', text: 'Making Memories' },
              ].map((value, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-[3rem] md:text-[4rem] font-bold text-accent mb-3">
                    {value.letter}
                  </div>
                  <p className="text-[14px] leading-[1.5]">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-background-light py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
              <div className="text-center">
                <h3 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent mb-6">
                  Our Mission
                </h3>
                <p className="text-text-tertiary text-[1.1rem] leading-[1.8]">
                  To serve authentic South Indian cuisine prepared with the finest ingredients and traditional recipes, ensuring every customer enjoys a memorable dining experience that celebrates our rich cultural heritage.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent mb-6">
                  Our Vision
                </h3>
                <p className="text-text-tertiary text-[1.1rem] leading-[1.8]">
                  To become the most trusted and beloved South Indian QSR brand, known for uncompromising quality, authentic flavors, and exceptional hospitality, while expanding our presence across communities.
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
