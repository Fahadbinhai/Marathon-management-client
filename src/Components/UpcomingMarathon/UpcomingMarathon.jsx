import React from 'react';
import upcoming1 from '../../assets/images/upcoming 1.jpg'
import upcoming2 from '../../assets/images/upcoming 2.jpg'
import upcoming3 from '../../assets/images/upcoming 3.jpg'
import { Fade } from "react-awesome-reveal";
import { IoLocationSharp } from 'react-icons/io5';
import { FaBullhorn, FaCalendarDays } from 'react-icons/fa6';

const UpcomingMarathon = () => {
    return (
        <Fade delay={200}>
            <div className='mb-10 sm:p-5'>
                <h3 className='mb-4 text-3xl font-bold'>UpComing Marathons</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {/* card 1 */}
                    <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming1} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Let's GO Dhaka</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Hatirjheel Society</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming2} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Run Bangladesh</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Run Bangladesh Society</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming3} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Healthy Bangladesh</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Bangladesh Government</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming2} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Run Bangladesh</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Run Bangladesh Society</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 5 */}
                  <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming1} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Let's GO Dhaka</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Hatirjheel Society</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 6 */}
                     <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming2} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Run Bangladesh</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Run Bangladesh Society</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 7 */}
                    <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming3} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Healthy Bangladesh</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Bangladesh Government</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* card 8 */}
                    <div className="card bg-lime-100 image-full w-full transition-transform duration-500 transform hover:scale-105">
                        <figure>
                            <img src={upcoming1} alt="marathon" className='object-cover w-full h-48' />
                        </figure>
                        <div className="card-body mx-4">
                            <h2 className="card-title">Let's GO Dhaka</h2>
                            <p className='flex items-center'><IoLocationSharp /> Hatirjheel</p>
                            <p className='flex items-center'><FaCalendarDays /> 02-12-2025</p>
                            <p>By Hatirjheel Society</p>
                            <p className='flex items-center'><FaBullhorn /> Registration open soon</p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary hover:bg-lime-300 hover:text-black">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default UpcomingMarathon;
