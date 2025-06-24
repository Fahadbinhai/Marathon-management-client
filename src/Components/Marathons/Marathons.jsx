import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaCalendarTimes, FaGlobeAmericas, FaMapMarkerAlt, FaRunning } from 'react-icons/fa';
import { FaAlignLeft, FaCalendarPlus, FaFlagCheckered } from 'react-icons/fa6';
import { Link } from 'react-router';

const Marathons = () => {

    const [limit, setLimit] = useState([])

    // console.log(limit)

    const { _id } = limit

    // console.log(_id)

    useEffect(() => {

        fetch(`${import.meta.env.VITE_baseUrl}/marathon/limited`)
            .then(res => res.json())
            .then(data => setLimit(data))

    }, [])


    return (

        <Fade delay={300} >


            <section>

                <h3 className='mb-4 ml-4 text-3xl font-bold'>Marathons</h3>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        limit?.map(data => (
                            <div key={data._id} className='h-full'>
                                <div className="card bg-base-100 w-96 h-[420px] 2xl:h-[450px] 2xl:mx-auto shadow-sm">
                                    <figure className='p-2'>
                                        <img
                                            className='rounded w-full h-48'
                                            src={data.url}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> <FaGlobeAmericas className='text-blue-500'></FaGlobeAmericas> {data.name}</h2>
                                        {/* <p className='flex items-center gap-1'>  <FaAlignLeft className="text-gray-500" /> {data.description}</p> */}
                                        <div className='flex items-center gap-2'>
                                            <p className='flex items-center gap-1'> <FaCalendarPlus className="text-green-500" /> Reg Starts : {data.registrationStarts.slice(0, 10)}</p>
                                            <p className='flex items-center gap-1'> <FaCalendarTimes className="text-red-500" /> Reg Ends : {data.registrationEnds.slice(0, 10)}</p>
                                        </div>
                                        {/* <p className='flex items-center gap-1'> <FaFlagCheckered className="text-yellow-600" /> Marathon Date : {data.marathonStarts.slice(0, 10)}</p> */}
                                        <p className='flex items-center gap-1'> <FaMapMarkerAlt className="text-blue-500" />  Location : {data.location}</p>
                                        <p className='flex items-center gap-1'> <FaRunning className="text-purple-500" /> Distance : {data.distance}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/marathonDetails/${data._id}`} className="btn btn-primary">See Details</Link>
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

export default Marathons;