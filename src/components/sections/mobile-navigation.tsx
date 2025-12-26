'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Menu', href: '/our-menu' },
  { name: 'Contact Us', href: '/contact' },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-brand-green shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/logo-2-1.png?"
              alt="Chennai Central Patna Logo"
              width={40}
              height={40}
              className="brightness-0 invert"
            />
            <div className="text-brand-gold font-display font-bold text-lg leading-tight">
              <div>CHENNAI</div>
              <div className="text-sm">CENTRAL</div>
            </div>
          </Link>
          
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-brand-gold transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav 
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-brand-green z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          {/* Navigation Links */}
          <ul className="space-y-2 mb-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block py-4 px-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-gold text-brand-green shadow-lg' 
                        : 'text-white hover:bg-brand-gold hover:text-brand-green'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Info */}
          <div className="mt-auto space-y-4 pt-6 border-t border-brand-gold/20">
            <div className="flex items-center gap-3 text-white">
              <Phone size={20} className="text-brand-gold" />
              <div>
                <div className="text-sm text-brand-gold font-semibold">Call Us</div>
                <div className="text-sm">+91 612 XXXX XXXX</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <MapPin size={20} className="text-brand-gold" />
              <div>
                <div className="text-sm text-brand-gold font-semibold">Location</div>
                <div className="text-sm">Patna, Bihar</div>
              </div>
            </div>

            <div className="text-center pt-4">
              <div className="text-brand-gold text-sm font-semibold mb-1">Open Daily</div>
              <div className="text-white text-xs">6:30 AM - 11:30 AM</div>
              <div className="text-white text-xs">4:00 PM - 1:00 AM</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for mobile header */}
      <div className="lg:hidden h-16" />
    </>
  );
};

export default MobileNavigation;