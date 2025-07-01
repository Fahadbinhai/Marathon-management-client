import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div className='bg-lime-100 min-h-screen flex flex-col'>
            <header className='w-full shadow-md sticky top-0 z-50'>
                <Navbar />
            </header>

            <main className='flex-1'>
                <section className='max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-6'>
                    <Outlet />
                </section>
            </main>

            <footer className='mt-auto'>
                <Footer />
            </footer>
        </div>
    );
};

export default MainPage;
