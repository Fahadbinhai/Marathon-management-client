import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import MyMarathonModal from './MyMarathonModal/MyMarathonModal';

const MyMarathonList = () => {

    const { user } = useContext(AuthContext)
    const [marathons, setMarathons] = useState([])
    const [selectedMarathon, setSelectedMarathon] = useState([])

    // console.log(selectedMarathon)


    // loading selected data (marathon create by user)
    useEffect(() => {

        if (user?.email) {
            myCreatedMarathon()
        }

    }, [user])

    // fetching all marathon data

    const myCreatedMarathon = () => {
        fetch(`${import.meta.env.VITE_baseUrl}/myMarathon?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMarathons(data))
    }

    // opening modal

    const handleMyMarathonModal = (id) => {

        document.getElementById('my-marathon-modal').showModal()

        const willChange = marathons.find(change => change._id == id)

        setSelectedMarathon(willChange)

    }

    // closing modal

    const closingModal =()=>{

        document.getElementById('my-marathon-modal').close();

    }




    return (
        <div className="overflow-x-auto px-2">

            <h3 className='mb-5 text-3xl text-center font-medium'>You have Created following Marathons</h3>

            <table className="table w-full min-w-[600px] text-sm md:text-base">
                {/* head */}
                <thead className="bg-lime-200 text-gray-700">
                    <tr>
                        <th>#</th>
                        <th>Marathon Name</th>
                        <th>Location</th>
                        <th>Distance</th>
                        <th>Marathon Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {marathons.map((item, index) => (
                        <tr key={item._id} className="hover:bg-gray-50">
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.distance}</td>
                            <td>{item.marathonStarts.slice(0,10)}</td>
                            <td className='md:space-x-2 flex flex-col gap-2 md:flex-row'>
                                <button onClick={() => handleMyMarathonModal(item._id)} className='btn btn-primary hover:bg-lime-300 hover:text-black'> Update </button>
                                <button className='btn btn-primary hover:bg-red-600 hover:text-black'> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* calling modal from here */}

            {

                selectedMarathon && (
                    <MyMarathonModal selectedMarathon={selectedMarathon} closingModal={closingModal} myCreatedMarathon={myCreatedMarathon} ></MyMarathonModal>

                    // <MyMarathonModal></MyMarathonModal>
                )

            }







        </div>
    );
};

export default MyMarathonList;