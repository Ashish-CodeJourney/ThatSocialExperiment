import React from 'react';

interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

export default function MobileNavLink({ href, children, isActive, onClick }: MobileNavLinkProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`relative block px-4 py-2 text-gray-600 dark:text-gray-300 transition-colors group ${
                isActive ? 'text-rose-500 dark:text-rose-400' : 'hover:text-rose-500 dark:hover:text-rose-400'
            }`}
        >
            {children}
            <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300 ${
                    isActive ? 'w-full' : ''
                }`}
            />
        </a>
    );
}
