import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Finding this community changed my life. It's a safe space where I can truly be myself.",
    author: "Sarah M.",
    role: "Community Member"
  },
  {
    quote: "The support and understanding I've received here is incredible. It's more than just a group, it's family.",
    author: "James P.",
    role: "Mental Health Advocate"
  },
  {
    quote: "A beautiful blend of compassion, growth, and genuine connections. Exactly what our world needs.",
    author: "Elena R.",
    role: "Wellness Coach"
  }
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-emerald-50 dark:bg-emerald-950/30 scroll-animate fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Voices of Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="h-8 w-8 text-emerald-500 mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4 dark:border-gray-700">
                <p className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}