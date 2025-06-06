import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';


const MainPage = () => {
    return (
        <div className='bg-lime-100 min-h-screen'>
            <section className='mx-5'>

                {/* header section */}
                <header>
                    <Navbar></Navbar>

                    
                </header>

                {/* main section */}
                <main>
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