import React from 'react';
import Header from './components/layout/header/Header.tsx';
import Footer from './components/layout/footer/Footer.tsx';
import Hero from './components/hero/Hero.tsx';
import Mission from './features/mission/Mission.tsx';
import Gallery from './features/gallery/Gallery.tsx';
import Testimonials from './features/testimonials/Testimonials.tsx';
import Resources from './features/resources/Resources.tsx';
import Join from './features/join/Join.tsx';
import Contact from './features/contact/Contact.tsx';
import './styles/animations.css';

import { Analytics } from "@vercel/analytics/react";

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
            <Footer />
            {/* Add Vercel Analytics */}
            <Analytics />
        </div>
    );
}
