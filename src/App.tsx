import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Join from './components/Join';
import Contact from './components/Contact';
import './styles/animations.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Gallery />
        <Testimonials />
        <Resources />
        <Join />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 ThatSocialExperiment. Community with Compassion. Creating Hope.</p>
        </div>
      </footer>
    </div>
  );
}