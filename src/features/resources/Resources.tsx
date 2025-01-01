import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation.ts';
import { Book, Heart, Brain, Users } from 'lucide-react';

const resources = [
  {
    icon: Book,
    title: "Educational Content",
    description: "Articles and guides on mental wellness, relationships, and personal growth.",
    link: "/resources/educational-content"
  },
  {
    icon: Heart,
    title: "Support Groups",
    description: "Join our virtual support circles for shared experiences and healing.",
    link: "/resources/support-groups"
  },
  {
    icon: Brain,
    title: "Mindfulness Tools",
    description: "Access guided meditations and mindfulness exercises.",
    link: "/resources/mindfulness-tools"
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Participate in workshops, talks, and social gatherings.",
    link: "/resources/community-events"
  }
];

export default function Resources() {
  const ref = useScrollAnimation();

  return (
    <section id="resources" ref={ref} className="py-20 bg-rose-50 dark:bg-rose-950/30 scroll-animate fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
          Resources for Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <resource.icon className="h-10 w-10 text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{resource.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
              <a 
                href={resource.link}
                className="text-rose-500 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}