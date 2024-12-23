import React from 'react';
import ImageCard from '../../components/common/ImageCard.tsx';

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
      <section id="gallery" className="py-20 bg-rose-50 dark:bg-rose-950/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
            Moments of Connection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-2xl group">
                  <ImageCard {...image} />
                  <div className="bg-white p-4 rounded-b-lg">
                    <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-lg text-gray-600">{image.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
