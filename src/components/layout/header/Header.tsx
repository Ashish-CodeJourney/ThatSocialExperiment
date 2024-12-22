import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Detect scroll position to highlight the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'mission', 'join', 'contact'];
      const scrollPosition = window.scrollY;

      // Set active link based on scroll position
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              ThatSocialExperiment
            </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about" isActive={activeLink === 'about'} onClick={() => setActiveLink('about')}>About</NavLink>
              <NavLink href="#mission" isActive={activeLink === 'mission'} onClick={() => setActiveLink('mission')}>Mission</NavLink>
              <NavLink href="#join" isActive={activeLink === 'join'} onClick={() => setActiveLink('join')}>Join Us</NavLink>
              <NavLink href="#contact" isActive={activeLink === 'contact'} onClick={() => setActiveLink('contact')}>Contact</NavLink>
              <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
                Get Involved
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden pt-4 pb-3">
                <div className="flex flex-col space-y-4">
                  <MobileNavLink href="#about" isActive={activeLink === 'about'} onClick={() => setActiveLink('about')}>About</MobileNavLink>
                  <MobileNavLink href="#mission" isActive={activeLink === 'mission'} onClick={() => setActiveLink('mission')}>Mission</MobileNavLink>
                  <MobileNavLink href="#join" isActive={activeLink === 'join'} onClick={() => setActiveLink('join')}>Join Us</MobileNavLink>
                  <MobileNavLink href="#contact" isActive={activeLink === 'contact'} onClick={() => setActiveLink('contact')}>Contact</MobileNavLink>
                  <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
                    Get Involved
                  </button>
                </div>
              </div>
          )}
        </nav>
      </header>
  );
}
