import React from 'react';
import ImageCard from './ImageCard';

const images = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    alt: "Group Therapy Session",
    title: "Healing Together",
    description: "Creating safe spaces for meaningful conversations"
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    alt: "People Connecting",
    title: "Building Connections",
    description: "Fostering authentic relationships"
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    alt: "Community Event",
    title: "Community Events",
    description: "Coming together to create positive change"
  },
  {
    src: "https://images.unsplash.com/photo-1552581234-26160f608093",
    alt: "Mindfulness Session",
    title: "Mindful Moments",
    description: "Practicing presence and awareness"
  }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Moments of Connection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <ImageCard key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}