import React from 'react';

export default function SupportGroups() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-black bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent">
                Support Groups
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                Our support groups are safe spaces where you can connect with others who share similar experiences. These virtual circles are designed to foster healing, build understanding, and encourage mutual support.
            </p>
            <ul className="list-disc space-y-4 pl-6 text-gray-700 dark:text-gray-300">
                <li>
                    Anxiety Support Group: Sharing strategies for managing anxiety.
                </li>
                <li>
                    Depression Recovery Circle: Navigating the path to healing together.
                </li>
                <li>
                    Grief and Loss Support: Finding comfort through shared experiences.
                </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-6">
                To join a support group, sign up via the link below:
            </p>
            <a
                href="https://example.com/join-support-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 transition-colors"
            >
                Sign Up for a Support Group →
            </a>
        </div>
    );
}
