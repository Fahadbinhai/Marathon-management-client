import React from 'react';
import upcoming1 from '../../assets/images/upcoming 1.jpg'
import upcoming2 from '../../assets/images/upcoming 2.jpg'
import upcoming3 from '../../assets/images/upcoming 3.jpg'
import upcoming4 from '../../assets/images/upcoming 4.jpg'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { IoLocationSharp } from 'react-icons/io5';
import { FaCalendarDays } from 'react-icons/fa6';


const UpcomingMarathon = () => {
    return (
        <Fade delay={300} >
            <div className='mb-10 sm:p-5'>
                <h3 className='mb-4 ml-4 text-3xl font-bold'>UpComing Marathons</h3>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {/* card 1 */}
                    <div className="card bg-lime-100 image-full w-96 transition-transform duration-500 transform hover:scale-110">
                        <figure>
                            <img
                                src={upcoming1}
                                alt="marathon" />
                        </figure>
                        <div className="card-body mx-5">
                            <h2 className="card-title">Let's GO Dhaka</h2>
                            <p className='flex items-center'> <IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'> <FaCalendarDays /> 02-12-2025</p>
                            <p>By Hatirjheel Society</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black hover:cursor-pointer">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="card bg-lime-100 image-full w-96 transition-transform duration-500 transform hover:scale-110 ">
                        <figure>
                            <img
                                src={upcoming2}
                                alt="marathon" />
                        </figure>
                        <div className="card-body mx-5">
                            <h2 className="card-title">Run Bangladesh</h2>
                            <p className='flex items-center'> <IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'> <FaCalendarDays /> 02-12-2025</p>
                            <p>By Run Bangladesh Society</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black hover:cursor-pointer">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="card bg-lime-100 image-full w-96 transition-transform duration-500 transform hover:scale-110">
                        <figure>
                            <img
                                src={upcoming3}
                                alt="marathon" />
                        </figure>
                        <div className="card-body mx-5">
                           <h2 className="card-title">Healthy Bangladesh</h2>
                            <p className='flex items-center'> <IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'> <FaCalendarDays /> 02-12-2025</p>
                            <p>By Bangladesh Government </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black hover:cursor-pointer">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="card bg-lime-100 image-full w-96 transition-transform duration-500 transform hover:scale-130">
                        <figure>
                            <img
                                src={upcoming4}
                                alt="marathon" />
                        </figure>
                        <div className="card-body mx-5">
                           <h2 className="card-title">Olympic Selection</h2>
                            <p className='flex items-center'> <IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'> <FaCalendarDays /> 02-12-2025</p>
                            <p>By Olympic Committee</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black hover:cursor-pointer">Details</button>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="card bg-lime-100 image-full w-96 transition-transform duration-500 transform hover:scale-130 ">
                        <figure>
                            <img
                                src={upcoming4}
                                alt="marathon" />
                        </figure>
                        <div className="card-body mx-5">
                           <h2 className="card-title">Jago Bangladesh</h2>
                            <p className='flex items-center'> <IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'> <FaCalendarDays /> 02-12-2025</p>
                            <p>By Jago Society</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black hover:cursor-pointer">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 6 */}
                    <div className="card bg-lime-100 image-full w-96 transition-transform duration-500 transform hover:scale-130 ">
                        <figure>
                            <img
                                src={upcoming4}
                                alt="marathon" />
                        </figure>
                        <div className="card-body mx-5">
                            <h2 className="card-title">Dhanmondi Marathon</h2>
                            <p className='flex items-center'> <IoLocationSharp /> Dhanmondi</p>
                            <p className='flex items-center'> <FaCalendarDays /> 02-12-2025</p>
                            <p>By Society Of Dhanmondi</p>
                            <div className="card-actions justify-end">
                                 <button className="btn btn-primary hover:bg-lime-300 hover:text-black hover:cursor-pointer">Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    );
};

export default UpcomingMarathon;