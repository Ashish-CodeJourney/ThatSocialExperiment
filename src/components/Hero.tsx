import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';
import BackgroundVideo from './BackgroundVideo';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-b from-rose-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <BackgroundVideo />
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mb-6 animate-fade-in">
            <Heart className="h-8 w-8 text-rose-500 animate-pulse" />
            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <Sparkles className="h-8 w-8 text-amber-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-emerald-600 dark:from-rose-400 dark:to-emerald-400 bg-clip-text text-transparent animate-slide-up">
            Not Just a Community,<br />A Social Experiment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
            Redefining connection in a disconnected world through empathy,
            mental wellness, and meaningful relationships.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up">
            <button className="bg-rose-500 dark:bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-600 dark:hover:bg-rose-700 transition-colors text-lg">
              Join the Movement
            </button>
            <button className="border-2 border-rose-500 dark:border-rose-400 text-rose-500 dark:text-rose-400 px-8 py-3 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}