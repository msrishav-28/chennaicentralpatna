import SidebarNavigation from '@/components/sections/sidebar-navigation';
import MobileNavigation from '@/components/sections/mobile-navigation';
import HeroCarousel from '@/components/sections/hero-carousel';
import AboutSection from '@/components/sections/about-section';
import ValuesSection from '@/components/sections/values-section';
import MenuPreviewSection from '@/components/sections/menu-preview-section';
import TastefulGallerySection from '@/components/sections/tasteful-gallery-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <MobileNavigation />
      <div className="flex min-h-screen">
        <SidebarNavigation />
        
        <main id="main-content" className="w-full">
          <HeroCarousel />
          <AboutSection />
          <ValuesSection />
          <MenuPreviewSection />
          <TastefulGallerySection />
          <Footer />
        </main>
      </div>
    </>
  );
}