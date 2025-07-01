import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCalendarPlus, FaCalendarTimes, FaGlobeAmericas, FaMapMarkerAlt, FaRunning } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const AllMarathons = () => {

    const allData = useLoaderData()
    const [showData, setShowData] = useState(allData)

    const handleSort = () => {
        fetch(`${import.meta.env.VITE_baseUrl}/allMarathon?sort=latest`)
            .then(res => res.json())
            .then(data => {
                setShowData(data)
            })
    }

    useEffect(() => {
        document.title = 'Marathon || All Marathons';
    }, []);

    return (
        <Fade triggerOnce delay={150}>
            <section className='py-5'>
                <h3 className='font-bold text-2xl text-center'>All Marathons</h3>

                <div className='mb-4 flex justify-end'>
                    <button onClick={handleSort} className='btn btn-primary'>
                        <FaFilter /> Sort by Latest
                    </button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        showData?.map(data => (
                            <div key={data._id} className='h-full'>
                                <div className="card bg-base-100 w-96 h-[420px] shadow-sm">
                                    <figure className='p-2'>
                                        <img
                                            className='rounded w-full h-48'
                                            src={data.url}
                                            alt={data.name} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            <FaGlobeAmericas className='text-blue-500' /> {data.name}
                                        </h2>
                                        <div className='flex items-center gap-2'>
                                            <p className='flex items-center gap-1'>
                                                <FaCalendarPlus className="text-green-500" /> Reg Starts : {data.registrationStarts.slice(0, 10)}
                                            </p>
                                            <p className='flex items-center gap-1'>
                                                <FaCalendarTimes className="text-red-500" /> Reg Ends : {data.registrationEnds.slice(0, 10)}
                                            </p>
                                        </div>
                                        <p className='flex items-center gap-1'>
                                            <FaMapMarkerAlt className="text-blue-500" /> Location : {data.location}
                                        </p>
                                        <p className='flex items-center gap-1'>
                                            <FaRunning className="text-purple-500" /> Distance : {data.distance}
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/marathonDetails/${data._id}`} className="btn btn-primary">
                                                See Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fade>
    );
};

export default AllMarathons;
