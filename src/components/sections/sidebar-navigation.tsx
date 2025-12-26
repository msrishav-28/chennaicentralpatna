'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Menu', href: '/our-menu' },
  { name: 'Contact Us', href: '/contact' },
];

const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[300px] h-screen fixed top-0 left-0 bg-brand-green text-white z-40 shadow-[4px_0_15px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col h-full text-center px-[30px] pt-[40px] pb-[30px]">
        {/* Logo Section */}
        <div className="mb-14 animate-fade-in-down">
          <Link href="/" className="inline-block group">
            <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/logo-2-1.png?"
                alt="Chennai Central Logo"
                width={90}
                height={90}
                className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
              />
            </div>
          </Link>
          <div className="mt-6 font-display uppercase text-brand-gold tracking-[2.5px] text-[24px] font-bold leading-tight">
            <p>CHENNAI</p>
            <p>CENTRAL</p>
          </div>
          <div className="h-0.5 w-12 bg-brand-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li 
                  key={item.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className={`block py-[15px] px-4 rounded-lg uppercase tracking-[1.5px] text-[13px] font-bold transition-all duration-300 transform ${
                      isActive 
                        ? 'bg-brand-gold text-brand-green shadow-lg scale-105 translate-x-2' 
                        : 'text-white hover:bg-brand-gold hover:text-brand-green hover:translate-x-2'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto">
          <div className="flex justify-center gap-6 my-8">
            <a 
              href="#" 
              aria-label="Facebook"
              className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
                <Facebook className="size-5 text-white hover:text-brand-gold transition-colors" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Twitter className="size-5 text-white hover:text-brand-gold transition-colors" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              >
                <Instagram className="size-5 text-white hover:text-brand-gold transition-colors" />
            </a>
          </div>
            <div className="space-y-2">
            <p className="font-body text-[11px] uppercase tracking-wider">
              Copyright © 2024 Chennai Central <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNavigation;