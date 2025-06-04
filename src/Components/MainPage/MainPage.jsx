import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const MainPage = () => {
    return (
        <div className='bg-lime-100'>
            <section className='mx-5'>

                {/* header section */}
                <header>
                    <Navbar></Navbar>

                    <Banner></Banner>
                </header>

                {/* main section */}
                <main>

                </main>

                {/* footer section */}
                <footer>

                </footer>
            </section>
        </div>
    );
};

export default MainPage;