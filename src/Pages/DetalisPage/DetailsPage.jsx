import React, { useContext, useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaAlignLeft, FaCalendarPlus, FaCalendarTimes, FaFlagCheckered, FaGlobeAmericas, FaMapMarkerAlt, FaRunning, FaUserPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import MarathonCountDown from '../../Components/MarathonCountDown/MarathonCountDown';
import { AuthContext } from '../../Context/ContextProvider';

const DetailsPage = () => {

    const { id } = useParams();
    const [singleData, setSingleData] = useState(null);
    const { getAccessToken } = useContext(AuthContext)



    useEffect(() => {


        loadingData()

        // fetch(`${import.meta.env.VITE_baseUrl}/allMarathon/${id}`, {
        //     method: 'GET',
        //     headers: {

        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => setSingleData(data))
    }, [id])


    const loadingData = async() => {

        const token = await getAccessToken()

        fetch(`${import.meta.env.VITE_baseUrl}/allMarathon/${id}`, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                authorization : `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setSingleData(data))

    }


    if (!singleData) {
        return <span className="loading loading-spinner loading-xl mt-[22rem] ml-[35rem]"></span>
    }



    // const singleData = useLoaderData();

    const { _id, url, name, registrationStarts, registrationEnds, location, distance, marathonStarts, description, registrationCount } = singleData

    // console.log(singleData)

    const todayDate = new Date();
    const registrationOpenDate = new Date(registrationStarts)
    const registrationEndDate = new Date(registrationEnds)

    // console.log(todayDate);
    // console.log(registrationEndDate);
    // console.log(registrationOpenDate);

    const isDateInRegistrationPeriod = todayDate >= registrationOpenDate && todayDate <= registrationEndDate

    // console.log(isDateInRegistrationPeriod)



    return (
        <Zoom>
            <div className='py-10'>
                <div className="card bg-base-100 md:w-[450px] w-full h-[520px] shadow-sm mx-auto pt-2">
                    <figure className='p-2'>
                        <img
                            className='rounded w-full h-48'
                            src={url}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> <FaGlobeAmericas className='text-blue-500'></FaGlobeAmericas> {name}</h2>
                        <p className='flex items-center gap-1'>  <FaAlignLeft className="text-gray-500" /> {description}</p>
                        <div className='flex items-center gap-2'>
                            <p className='flex items-center gap-1'> <FaCalendarPlus className="text-green-500" /> Reg Starts : {registrationStarts.slice(0, 10)}</p>
                            <p className='flex items-center gap-1'> <FaCalendarTimes className="text-red-500" /> Reg Ends : {registrationEnds.slice(0, 10)}</p>
                        </div>
                        <p className='flex items-center gap-1'> <FaFlagCheckered className="text-yellow-600" /> Marathon Date : {marathonStarts.slice(0, 10)}</p>
                        <p className='flex items-center gap-1'> <FaMapMarkerAlt className="text-blue-500" />  Location : {location}</p>
                        <p className='flex items-center gap-1'> <FaRunning className="text-purple-500" /> Distance : {distance}</p>

                        {/* registration count */}

                        <p className='flex items-center gap-1'> <FaUserPlus className="text-xl text-green-500" /> Total Registration : {registrationCount}</p>

                        {/* registration button */}

                        <div className='card-actions justify-between items-center'>
                            <MarathonCountDown marathonStarts={marathonStarts}></MarathonCountDown>
                            {
                                isDateInRegistrationPeriod ? <Link to={`/marathonRegistrationPage/${_id}`} className="btn btn-primary">Register Now</Link> : <button className="btn" disabled="disabled">Registration closed</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default DetailsPage;