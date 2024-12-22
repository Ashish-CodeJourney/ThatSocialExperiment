import React from 'react';
import { Target, Heart, Users, Sparkles, Brain, Smile, Globe } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Empathy & Understanding",
    description: "Building bridges through compassion and genuine connection."
  },
  {
    icon: Users,
    title: "Authenticity",
    description: "Creating spaces where people can be their true selves."
  },
  {
    icon: Brain,
    title: "Mental Well-being",
    description: "Prioritizing emotional health and psychological safety."
  },
  {
    icon: Sparkles,
    title: "Innovation & Collaboration",
    description: "Exploring new ways to connect and grow together."
  },
  {
    icon: Smile,
    title: "Positivity",
    description: "Fostering hope, kindness, and creating a better world."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Spreading our values and mission to create a better world for all."
  }
];

export default function Mission() {
  return (
      <section className="py-16 md:py-24 bg-rose-50 dark:bg-rose-950/30 text-gray-800 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Target className="h-12 w-12 text-rose-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-extrabold text-center mb-16 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-xl max-w-xl mx-auto">
              We're on a mission to redefine social interactions by encouraging empathy, collaboration,
              and meaningful connections while promoting mental well-being through safe, judgment-free spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
                <div
                    key={index}
                    className="group bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-rose-50"
                >
                  <value.icon className="h-12 w-12 text-indigo-600 mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:text-indigo-800" />
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-lg">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
