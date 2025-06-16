import React, { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner'
import UpcomingMarathon from '../../Components/UpcomingMarathon/UpcomingMarathon'
import Reviews from '../../Components/Reviews/Reviews'
import LatestBlogs from '../../Components/LatestBlogs/LatestBlogs'
import Marathons from '../../Components/Marathons/Marathons';
import Footer from '../../Components/Footer/Footer';

const Home = () => {

    useEffect(() => {
                document.title = 'Marathon || Home';
            }, []);

    return (
        <div>

            {/* <Banner></Banner> */}

            <Banner></Banner>


            {/* Marathon pages needed to add */}
            <Marathons></Marathons>



            {/* Upcoming Marathon page */}
            <UpcomingMarathon></UpcomingMarathon>


            {/* Reviews */}
            <Reviews></Reviews>


            {/* Latest Blogs */}
            <LatestBlogs></LatestBlogs>



            {/* footer section */}

            <Footer></Footer>


        </div>
    );
};

export default Home;