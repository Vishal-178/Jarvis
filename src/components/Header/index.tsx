'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = (e) => {
    if (!e.target.closest("nav") && !e.target.closest("button")) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (navbarOpen) {
      document.addEventListener("click", closeNavbar);
    } else {
      document.removeEventListener("click", closeNavbar);
    }
    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, [navbarOpen]);

  const menuData = [
    { title: 'Unlisted Shares', path: '/unlisted-share-price' },
    { title: 'Our Blogs', path: '/our-blogs' },
    { title: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-white bg-opacity-80 backdrop-blur-md transition-all">
      <div className="container flex items-center justify-between p-4 mx-auto px-4 sm:px-10 lg:px-20 xl:px-28 max-w-[1440px]">
        <Link href="/">
          <Image
            src="/images/logo/logo.svg"
            alt="Unlisted Shares India Logo"
            width={256}
            height={40}
            className={`transition-all`}
          />
        </Link>
        <button
          onClick={navbarToggleHandler}
          className="lg:hidden p-2 rounded-md border focus:ring-2 focus:ring-primary"
          aria-label="Toggle Menu"
        >
          <span className={`block h-0.5 w-6 bg-black transition-all ${navbarOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all my-1 ${navbarOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all ${navbarOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
        <nav className={`lg:flex lg:items-center lg:space-x-8 absolute top-full left-0 w-full bg-white shadow-md lg:static lg:w-auto lg:shadow-none transition-all transform ${navbarOpen ? 'translate-y-0 opacity-100' : 'hidden'} lg:opacity-100 lg:translate-y-0`}>
          <ul className="space-y-4 p-4 lg:space-y-0 lg:flex lg:space-x-6">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                <Link
                  href={menuItem.path}
                  className={`text-black hover:text-gray-700 transition ${pathname === menuItem.path ? 'font-semibold' : ''}`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
