import React from 'react';

export default function EducationalContent() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
                Educational Content
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Our Educational Content section provides a wealth of resources designed to help you grow and thrive mentally, emotionally, and socially. Explore articles, guides, and tips crafted by professionals to empower your journey toward personal growth and mental wellness.
            </p>
            <ul className="list-disc space-y-4 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                    <a
                        href="https://example.com/mental-health-basics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                    >
                        Mental Health Basics: Understanding the Importance of Emotional Wellbeing
                    </a>
                </li>
                <li>
                    <a
                        href="https://example.com/building-healthy-relationships"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                    >
                        Building Healthy Relationships: Communication, Trust, and Respect
                    </a>
                </li>
                <li>
                    <a
                        href="https://example.com/self-improvement-strategies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 transition-colors"
                    >
                        Self-Improvement Strategies: Habits for Personal Growth
                    </a>
                </li>
            </ul>
        </div>
    );
}
