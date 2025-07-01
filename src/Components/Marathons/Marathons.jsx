import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCalendarTimes, FaGlobeAmericas, FaMapMarkerAlt, FaRunning } from 'react-icons/fa';
import { FaCalendarPlus } from 'react-icons/fa6';
import { Link } from 'react-router';

const Marathons = () => {
    const [limit, setLimit] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseUrl}/marathon/limited`)
            .then(res => res.json())
            .then(data => setLimit(data))
    }, []);

    return (
        <Fade delay={300}>
            <section className='mt-10'>
                <h3 className='mb-4 ml-4 text-3xl font-bold'>Marathons</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {
                        limit?.map(data => (
                            <div key={data._id} className='h-full'>
                                <div
                                    className="card bg-base-100 w-full h-[420px] 2xl:h-[450px] shadow-md 
                                    hover:shadow-xl hover:shadow-lime-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] cursor-pointer"
                                >
                                    <figure className='p-2'>
                                        <img
                                            className='rounded w-full h-48 object-cover'
                                            src={data.url}
                                            alt={data.name} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            <FaGlobeAmericas className='text-blue-500' /> {data.name}
                                        </h2>
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex items-center gap-1 text-sm'>
                                                <FaCalendarPlus className="text-green-500" /> Reg Starts: {data.registrationStarts.slice(0, 10)}
                                            </div>
                                            <div className='flex items-center gap-1 text-sm'>
                                                <FaCalendarTimes className="text-red-500" /> Reg Ends: {data.registrationEnds.slice(0, 10)}
                                            </div>
                                            <div className='flex items-center gap-1 text-sm'>
                                                <FaMapMarkerAlt className="text-blue-500" /> Location: {data.location}
                                            </div>
                                            <div className='flex items-center gap-1 text-sm'>
                                                <FaRunning className="text-purple-500" /> Distance: {data.distance}
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end mt-auto">
                                            <Link to={`/marathonDetails/${data._id}`} className="btn btn-primary">See Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Link to='/marathons' className='btn btn-outline bg-lime-500 m-4 text-black hover:bg-lime-500 hover:text-white mt-7'>Show More</Link>
            </section>
        </Fade>
    );
};

export default Marathons;
