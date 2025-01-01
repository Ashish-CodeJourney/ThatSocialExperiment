import React from 'react';

export default function CommunityEvents() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
                Community Events
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Join our vibrant community events to connect, learn, and grow with others. From workshops to social gatherings, we aim to create meaningful experiences.
            </p>
            <ul className="list-disc space-y-4 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                    <strong>Upcoming Workshops:</strong>
                    <p>Emotional Intelligence, Building Resilience</p>
                </li>
                <li>
                    <strong>Talks:</strong>
                    <p>“The Science of Happiness” by Dr. Emily Harper</p>
                </li>
                <li>
                    <strong>Social Gatherings:</strong>
                    <p>Virtual Coffee Chats and Game Nights</p>
                </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-6">
                Check out our event calendar for more details:
            </p>
            <a
                href="https://example.com/community-events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 transition-colors"
            >
                View Event Calendar →
            </a>
        </div>
    );
}
