import React from 'react';
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
  return (
    <section id="join" className="py-16 md:py-24 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">Join Our Movement</h2>
          <p className="text-xl text-gray-600">
            We're looking for passionate individuals who want to make a difference.
            Find your role in our growing community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <role.icon className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
              <p className="text-gray-600 mb-4">{role.description}</p>
              <button className="text-rose-500 font-medium hover:text-rose-600 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}