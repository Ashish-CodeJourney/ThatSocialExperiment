import React from 'react';

interface ImageCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
}

export default function ImageCard({ src, alt }: ImageCardProps) {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
            <img
                src={src}
                alt={alt}
                className="h-64 w-full object-cover"
            />
        </div>
    );
}
