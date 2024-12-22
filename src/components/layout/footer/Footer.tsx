import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-rose-50/50 to-rose dark:from-gray-900 dark:to-gray-800 py-8 transition-all duration-200">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
                <p className="text-lg font-medium">
                    © 2024{' '}
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600 dark:from-rose-400 dark:to-indigo-400">
            ThatSocialExperiment
          </span>
                    . Community with Compassion. Creating Hope.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
