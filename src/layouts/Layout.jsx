import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primary">
            <Header />
            <main className="flex-grow pt-[64px]">

                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
