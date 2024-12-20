import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-20"
      >
        <source 
          src="https://cdn.coverr.co/videos/coverr-people-sharing-ideas-in-an-office-2633/1080p.mp4" 
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
    </div>
  );
}