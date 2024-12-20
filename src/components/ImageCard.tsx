import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </div>
  );
}