import React from 'react';
import { Target, Heart, Users, Sparkles, Brain, Smile } from 'lucide-react';

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
  }
];

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Target className="h-12 w-12 text-rose-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            We're on a mission to redefine social interactions by encouraging empathy,
            collaboration, and meaningful connections while promoting mental well-being
            through safe, judgment-free spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <value.icon className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}