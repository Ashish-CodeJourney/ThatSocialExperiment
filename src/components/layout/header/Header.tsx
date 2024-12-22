import React from 'react';
import { Heart, Users, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
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
            <NavLink href="#about">About</NavLink>
            <NavLink href="#mission">Mission</NavLink>
            <NavLink href="#join">Join Us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
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
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#mission">Mission</MobileNavLink>
              <MobileNavLink href="#join">Join Us</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
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

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-rose-500 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-rose-500 transition-colors block"
    >
      {children}
    </a>
  );
}