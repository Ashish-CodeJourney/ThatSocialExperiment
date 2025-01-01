import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import EducationalContent from './features/resources/topics/EducationalContent.tsx'; // Import the new component
import SupportGroups from './features/resources/topics/SupportGroups.tsx';
import MindfulnessTools from './features/resources/topics/MindfulnessTools.tsx';
import CommunityEvents from './features/resources/topics/CommunityEvents.tsx';

import { Analytics } from "@vercel/analytics/react";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
                <Header />

                <main className="mt-[80px]">
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/resources/educational-content" element={<EducationalContent />} />
                        <Route path="/resources/support-groups" element={<SupportGroups />} />
                        <Route path="/resources/mindfulness-tools" element={<MindfulnessTools />} />
                        <Route path="/resources/community-events" element={<CommunityEvents />} />
                    </Routes>
                </main>
                <Footer />
            </div>
            {/* Add Vercel Analytics */}
            <Analytics />
        </Router>
    );
}
