import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import latest1 from '../../assets/images/latestnews1.jpg';
import latest2 from '../../assets/images/latestnews2.jpg';
import latest3 from '../../assets/images/latestnews3.jpg';
import Swal from 'sweetalert2';

const LatestBlogs = () => {


    const staticButtonClick = () => {
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Static section Button Clicked Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <section id='blogs' className='pb-20 mt-10 px-4'>
            <Fade triggerOnce delay={1000}>
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-7 text-center'>
                    Our Latest Blogs !!
                </h3>
            </Fade>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto '>
                {/* card 1 */}
                <Slide triggerOnce direction='left'>
                    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition h-full flex flex-col  ">
                        <figure className="px-6 pt-6">
                            <img src={latest1} alt="Blog 1" className="rounded-xl w-full object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">How to Run Faster</h2>
                            <p className='flex-1/2'>Running fast requires a mix of good technique, strong muscles, and regular practice. Start with a proper warm-up to loosen your muscles and avoid injury.</p>
                            <div className="card-actions mt-2">
                                <button onClick={staticButtonClick} className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* card 2 */}
                <Slide triggerOnce direction='up'>
                    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
                        <figure className="px-6 pt-6">
                            <img src={latest2} alt="Blog 2" className="rounded-xl w-full object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">How to Increase Breath</h2>
                            <p>To improve your breathing and lung capacity, practice deep breathing daily—breathe in through your nose, hold for a few seconds, and exhale slowly through your mouth.</p>
                            <div className="card-actions mt-2">
                                <button onClick={staticButtonClick} className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>
                {/* card 2 */}
                <Slide triggerOnce direction='down'>
                    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
                        <figure className="px-6 pt-6">
                            <img src={latest2} alt="Blog 2" className="rounded-xl w-full object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">How to Increase Breath</h2>
                            <p>To improve your breathing and lung capacity, practice deep breathing daily—breathe in through your nose, hold for a few seconds, and exhale slowly through your mouth.</p>
                            <div className="card-actions mt-2">
                                <button onClick={staticButtonClick} className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* card 3 */}
                <Slide triggerOnce direction='right'>
                    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
                        <figure className="px-6 pt-6">
                            <img src={latest3} alt="Blog 3" className="rounded-xl w-full object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">What It Takes to Win a Marathon</h2>
                            <p>Winning a marathon requires more than just running fast. It demands consistent training, strong mental focus, and excellent endurance.</p>
                            <div className="card-actions mt-2">
                                <button onClick={staticButtonClick} className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default LatestBlogs;
