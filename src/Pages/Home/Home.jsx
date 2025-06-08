import React from 'react';
import Banner from '../../Components/Banner/Banner'
import UpcomingMarathon from '../../Components/UpcomingMarathon/UpcomingMarathon'
import Reviews from '../../Components/Reviews/Reviews'
import LatestBlogs from '../../Components/LatestBlogs/LatestBlogs'
import Marathons from '../../Components/Marathons/Marathons';

const Home = () => {
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


        </div>
    );
};

export default Home;