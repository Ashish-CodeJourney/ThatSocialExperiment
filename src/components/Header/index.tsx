import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#mission">Mission</NavLink>
              <NavLink href="#join">Join Us</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="ml-4 flex items-center space-x-4">
                <ThemeToggle />
                <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
                  Get Involved
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}