import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import UpcomingMarathon from '../UpcomingMarathon/UpcomingMarathon';
import Reviews from '../Reviews/Reviews';

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

                {/* Marathon pages needed to add */}


                {/* Upcoming Marathon page */}
                <UpcomingMarathon></UpcomingMarathon>

                {/* Reviews */}
                <Reviews></Reviews>

                </main>

                {/* footer section */}
                <footer>

                </footer>
            </section>
        </div>
    );
};

export default MainPage;