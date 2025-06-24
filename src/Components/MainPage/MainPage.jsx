import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';


const MainPage = () => {
    return (
        <div className='bg-lime-100 min-h-screen'>
            <section className='max-w-[1360px] mx-auto px-4'>

                {/* header section */}
                <header>
                    <Navbar></Navbar>

                    
                </header>

                {/* main section */}
                <main className='py-6'>
                <Outlet></Outlet>
                </main>

                {/* footer section */}
                <footer>

                </footer>
            </section>
        </div>
    );
};

export default MainPage;