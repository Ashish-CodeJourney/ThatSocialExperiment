import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation.ts';
import { Users, Code, Palette, Brain, Calendar, MessageCircle } from 'lucide-react';

const roles = [
  {
    icon: Users,
    title: "Community Builders",
    description: "Engage and grow our supportive community"
  },
  {
    icon: Palette,
    title: "Content Creators",
    description: "Create uplifting and meaningful content"
  },
  {
    icon: Code,
    title: "Developers",
    description: "Build robust and inclusive platforms"
  },
  {
    icon: Brain,
    title: "Mental Health Advocates",
    description: "Guide initiatives for emotional well-being"
  },
  {
    icon: Calendar,
    title: "Event Organizers",
    description: "Plan and execute impactful events"
  },
  {
    icon: MessageCircle,
    title: "Social Media Enthusiasts",
    description: "Amplify our message and grow online"
  }
];

export default function Join() {
  const ref = useScrollAnimation();

  return (
      <section ref={ref} id="join" className="py-16 md:py-24 bg-rose-50 dark:bg-rose-950/30 scroll-animate fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
              Join Our Movement
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're looking for passionate individuals who want to make a difference.
              Find your role in our growing community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
                <div
                    key={index}
                    className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <role.icon className="h-12 w-12 text-rose-500 mb-4 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{role.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
                  <button className="text-rose-500 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors duration-200 ease-in-out">
                    Learn More →
                  </button>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
