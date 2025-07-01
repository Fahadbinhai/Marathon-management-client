import React from 'react';
import slider1 from '../../assets/images/healthy-lifestyle-running-outdoors.jpg'
import slider2 from '../../assets/images/slider image 2.jpg'
import slider3 from '../../assets/images/slider 3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[60vh] md:h-[65vh] lg:h-[70vh] my-5 rounded-xl overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={slider1}
                    className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] object-cover"
                    alt="Slide 1"
                />
                <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={slider2}
                    className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] object-cover"
                    alt="Slide 2"
                />
                <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={slider3}
                    className="w-full h-[60vh] md:h-[65vh] lg:h-[70vh] object-cover"
                    alt="Slide 3"
                />
                <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
