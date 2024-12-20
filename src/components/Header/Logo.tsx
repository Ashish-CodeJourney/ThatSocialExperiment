import React from 'react';
import { Heart } from 'lucide-react';

export default function Logo() {
  return (
    <a href="#" className="flex items-center space-x-2 group">
      <Heart className="h-6 w-6 text-rose-500 group-hover:animate-float" />
      <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
        ThatSocialExperiment
      </span>
    </a>
  );
}