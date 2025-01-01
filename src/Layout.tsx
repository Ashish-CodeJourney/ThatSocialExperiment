import React from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
