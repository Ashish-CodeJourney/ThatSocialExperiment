import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation.ts';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "This community has been a life-changing experience for me. It's a space where I feel heard and valued.",
    author: "Aarav Patel",
    role: "Mental Health Advocate"
  },
  {
    quote: "The support I've received here has been incredible. It’s more than just a group, it's a family that lifts you up.",
    author: "Priya Sharma",
    role: "Community Member"
  },
  {
    quote: "A blend of compassion and personal growth. This community embodies everything that’s missing in the world.",
    author: "Neha Reddy",
    role: "Wellness Coach"
  }
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
      <section ref={ref} className="py-20 bg-rose-50 dark:bg-rose-950/30 dark:from-rose-700 dark:to-indigo-900 scroll-animate fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
            Voices of Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gradient-to-r hover:from-rose-500 hover:to-indigo-600 dark:hover:from-rose-700 dark:hover:to-indigo-900"
                >
                  <Quote className="h-12 w-12 text-teal-500 mb-6 animate-pulse group-hover:text-white transition-all duration-300" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-lg group-hover:text-white transition-all duration-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-6 dark:border-gray-700">
                    <p className="font-semibold text-gray-800 dark:text-white text-xl group-hover:text-white transition-all duration-300">{testimonial.author}</p>
                    <p className="text-teal-500 dark:text-teal-400 text-sm group-hover:text-white transition-all duration-300">{testimonial.role}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
