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
    <aside className="hidden lg:flex flex-col w-[300px] h-screen fixed top-0 left-0 bg-background text-foreground z-40 shadow-[2px_0_10px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col h-full text-center px-[30px] pt-[40px] pb-[30px]">
        {/* Logo Section */}
        <div className="mb-14 animate-fade-in-down">
          <Link href="/" className="inline-block group">
            <div className="transition-transform duration-500 hover:scale-110 hover:rotate-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/logo-2-1.png?"
                alt="The Rameshwaram Cafe Logo"
                width={90}
                height={90}
              />
            </div>
          </Link>
          <div className="mt-6 font-body uppercase text-primary tracking-[2.5px] text-[22px] font-bold leading-tight">
            <p>THE RAMESHWARAM</p>
            <p>CAFE</p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-2">
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
                    className={`block py-[15px] uppercase tracking-[1px] text-[14px] font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-primary hover:text-primary-foreground'
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
          <div className="flex justify-center gap-5 my-6">
            <a 
              href="https://www.facebook.com/therameshwaramcafe/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Facebook className="size-4 text-[#888888] hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://mobile.twitter.com/RameshwaramCafe" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Twitter className="size-4 text-[#888888] hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://instagram.com/therameshwaramcafe?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="transform transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Instagram className="size-4 text-[#888888] hover:text-primary transition-colors" />
            </a>
          </div>
          <p className="font-body text-[11px] text-[#888888] leading-[1.6]">
            Copyright © 2022 The Rameshwaram Cafe. <br />
            All Rights Reserved
          </p>
          <p className="font-body text-[11px] text-[#888888] mt-3 leading-[1.6]">
            Design By <a href="https://www.petpooja.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-primary transition-colors">PETPOOJA</a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNavigation;