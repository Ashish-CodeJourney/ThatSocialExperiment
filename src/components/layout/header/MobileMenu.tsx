import React from 'react';
import { X } from 'lucide-react';
import NavLink from './NavLink.tsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 animate-fade-in">
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
        
        <nav className="flex flex-col items-center justify-center min-h-screen space-y-8">
          <NavLink href="#about" onClick={onClose}>About</NavLink>
          <NavLink href="#mission" onClick={onClose}>Mission</NavLink>
          <NavLink href="#join" onClick={onClose}>Join Us</NavLink>
          <NavLink href="#contact" onClick={onClose}>Contact</NavLink>
          <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
            Get Involved
          </button>
        </nav>
      </div>
    </div>
  );
}