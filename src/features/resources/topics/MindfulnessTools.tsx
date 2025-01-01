import React from 'react';

export default function MindfulnessTools() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
                Mindfulness Tools
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Mindfulness is a powerful tool to stay present and calm in the midst of life's challenges. Explore guided meditations and exercises to develop a sense of peace and awareness.
            </p>
            <ul className="list-disc space-y-4 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                    <a
                        href="https://example.com/guided-meditation-beginners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                    >
                        Guided Meditation for Beginners: Start Your Mindfulness Journey
                    </a>
                </li>
                <li>
                    <a
                        href="https://example.com/breathing-exercises"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                    >
                        Breathing Exercises to Reduce Stress
                    </a>
                </li>
                <li>
                    <a
                        href="https://example.com/mindful-eating"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                    >
                        Mindful Eating: Cultivating a Healthy Relationship with Food
                    </a>
                </li>
            </ul>
        </div>
    );
}
