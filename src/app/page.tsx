import SidebarNavigation from '@/components/sections/sidebar-navigation';
import HeroCarousel from '@/components/sections/hero-carousel';
import AboutSection from '@/components/sections/about-section';
import ValuesSection from '@/components/sections/values-section';
import MenuPreviewSection from '@/components/sections/menu-preview-section';
import TastefulGallerySection from '@/components/sections/tasteful-gallery-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SidebarNavigation />
      
      <main className="w-full lg:ml-[300px]">
        <HeroCarousel />
        <AboutSection />
        <ValuesSection />
        <MenuPreviewSection />
        <TastefulGallerySection />
        <Footer />
      </main>
    </div>
  );
}