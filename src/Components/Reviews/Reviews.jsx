import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Reviews = () => {
    return (
        <Zoom duration={2000}>
            <div className='mb-15 grid grid-cols-12 gap-8'>


                <div className='col-span-12 md:col-span-4'>
                    <div className='ml-20 mt-[280px]'>
                        <h3 className='text-3xl font-medium'>Trusted by Thousands Peoples</h3>
                        <p>We are hosting marathons for 8+ years</p>

                        <div className="avatar-group -space-x-6 mt-5">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+99</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='col-span-12 md:col-span-8'>

                    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* card 1 */}
                        <div className="card w-96 bg-lime-300 card-xl shadow-sm hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition duration-300">
                            <div className="card-body">
                                <p>Amazing experience! Registering through this website was super easy. I got all the event details in one place, and the reminders were on time. Definitely joining the next one too!</p>
                                <p className='flex items-center gap-3'><FaStar className='text-amber-300' />4.5</p>
                                <div className='flex items-center gap-5'>
                                    <div className="avatar mt-7">
                                        <div className="w-18 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <h4>Mr. Cat</h4>
                                        <p className='text-black'>Teacher</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card w-96 bg-lime-300 card-xl shadow-sm hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition duration-300">
                            <div className="card-body">
                                <p>Amazing experience! Registering through this website was super easy. I got all the event details in one place, and the reminders were on time. Definitely joining the next one too!</p>
                                <p className='flex items-center gap-3'><FaStar className='text-amber-300' />4.5</p>
                                <div className='flex items-center gap-5'>
                                    <div className="avatar mt-7">
                                        <div className="w-18 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <h4>Mr. Cat</h4>
                                        <p className='text-black'>Teacher</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card w-96 bg-lime-300 card-xl shadow-sm hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition duration-300">
                            <div className="card-body">
                                <p>Amazing experience! Registering through this website was super easy. I got all the event details in one place, and the reminders were on time. Definitely joining the next one too!</p>
                                <p className='flex items-center gap-3'><FaStar className='text-amber-300' />4.5</p>
                                <div className='flex items-center gap-5'>
                                    <div className="avatar mt-7">
                                        <div className="w-18 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <h4>Mr. Cat</h4>
                                        <p className='text-black'>Teacher</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="card w-96 bg-lime-300 card-xl shadow-sm hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition duration-300">
                            <div className="card-body">
                                <p>Amazing experience! Registering through this website was super easy. I got all the event details in one place, and the reminders were on time. Definitely joining the next one too!</p>
                                <p className='flex items-center gap-3'><FaStar className='text-amber-300' />4.5</p>
                                <div className='flex items-center gap-5'>
                                    <div className="avatar mt-7">
                                        <div className="w-18 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <h4>Mr. Cat</h4>
                                        <p className='text-black'>Teacher</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </Zoom>
    );
};

export default Reviews;