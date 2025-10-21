import SidebarNavigation from '@/components/sections/sidebar-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

export default function MenuPage() {
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
            <h1 className="font-display text-5xl md:text-[72px] font-bold uppercase tracking-[2px] text-white">
              OUR MENU
            </h1>
          </div>
        </section>

        {/* Timing Badge */}
        <section className="bg-background-light py-8">
          <div className="container text-center">
            <div className="inline-block bg-gradient-to-br from-accent-primary to-accent-secondary text-white px-8 py-3 rounded-[25px] font-semibold text-[15px] md:text-[17px]">
              6:30am to 11:30am & 4pm to 1am
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="bg-background-light py-16 md:py-20">
          <div className="container">
            <div className="max-w-[900px] mx-auto">
              {/* Menu Image */}
              <div className="mb-16">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"
                  alt="The Rameshwaram Cafe Complete Menu"
                  width={800}
                  height={1271}
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Menu Categories */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent mb-6 text-center md:text-left">
                    Breakfast Specials
                  </h2>
                  <ul className="space-y-4 text-text-secondary text-[18px] font-semibold uppercase">
                    <li className="border-b border-border-subtle pb-3">VADA</li>
                    <li className="border-b border-border-subtle pb-3">IDLI</li>
                    <li className="border-b border-border-subtle pb-3">VEN PONGAL</li>
                    <li className="border-b border-border-subtle pb-3">KESARI BATH</li>
                    <li className="border-b border-border-subtle pb-3">UPMA</li>
                    <li className="border-b border-border-subtle pb-3">DOSA VARIETIES</li>
                    <li className="border-b border-border-subtle pb-3">FILTER COFFEE</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent mb-6 text-center md:text-left">
                    All Day Favorites
                  </h2>
                  <ul className="space-y-4 text-text-secondary text-[18px] font-semibold uppercase">
                    <li className="border-b border-border-subtle pb-3">MEALS THALI</li>
                    <li className="border-b border-border-subtle pb-3">CURD RICE</li>
                    <li className="border-b border-border-subtle pb-3">PULIYOGARE</li>
                    <li className="border-b border-border-subtle pb-3">BISIBELE BATH</li>
                    <li className="border-b border-border-subtle pb-3">GHEE RICE</li>
                    <li className="border-b border-border-subtle pb-3">SOUTH INDIAN THALI</li>
                    <li className="border-b border-border-subtle pb-3">BEVERAGES</li>
                  </ul>
                </div>
              </div>

              {/* Note Section */}
              <div className="mt-16 p-8 bg-background-light-alt rounded-lg border-l-4 border-accent-primary">
                <h3 className="font-display text-[1.5rem] font-bold text-text-heading-accent mb-4">
                  Note
                </h3>
                <p className="text-text-tertiary text-[1.1rem] leading-[1.8]">
                  All our dishes are prepared fresh using authentic South Indian recipes and the finest quality ingredients. We maintain the highest standards of hygiene in our kitchen. For specific dietary requirements or allergen information, please speak to our staff.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
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
