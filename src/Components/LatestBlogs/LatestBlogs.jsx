import React from 'react';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import latest1 from '../../assets/images/latestnews1.jpg'
import latest2 from '../../assets/images/latestnews2.jpg'
import latest3 from '../../assets/images/latestnews3.jpg'

const LatestBlogs = () => {
    return (
        <section className='pb-20'>
            <Fade triggerOnce delay={1000}>
                <h3 className='text-5xl font-bold mb-7 text-center'>Ours Latest Blogs !!</h3>
            </Fade>
            <div className='flex justify-around flex-col md:flex-row gap-5'>
                {/* card 1 */}
                <Slide triggerOnce direction='left'>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={latest1}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">How to run faster</h2>
                            <p>Running fast requires a mix of good technique, strong muscles, and regular practice. Start with a proper warm-up to loosen your muscles and avoid injury.</p>
                            <div className="card-actions mt-2">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* card 2 */}
                <Slide triggerOnce direction='up'>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={latest2}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">How to Increase Breath</h2>
                            <p>To improve your breathing and lung capacity, practice deep breathing daily—breathe in through your nose, hold for a few seconds, and exhale slowly through your mouth.</p>
                            <div className="card-actions mt-2">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* card 3 */}
                <Slide triggerOnce direction='right'>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={latest3}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">What It Takes to Win a Marathon</h2>
                            <p>Winning a marathon requires more than just running fast. It demands consistent training, strong mental focus, and excellent endurance. </p>
                            <div className="card-actions mt-2">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default LatestBlogs;