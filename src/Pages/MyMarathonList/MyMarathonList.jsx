import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import MyMarathonModal from './MyMarathonModal/MyMarathonModal';
import Swal from 'sweetalert2';

const MyMarathonList = () => {

    const { user, getAccessToken } = useContext(AuthContext)
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

    const myCreatedMarathon = async() => {

        const token = await getAccessToken()


        fetch(`${import.meta.env.VITE_baseUrl}/myMarathon?email=${user?.email}`,{
            headers:{
                authorization : `Bearer ${token}`
            }
        })
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

    const closingModal = () => {

        document.getElementById('my-marathon-modal').close();

    }


    // deleting marathons

    const handleMarathonDelete = (id) => {

        Swal.fire({
            title: "Are you sure to Delete this marathon?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_baseUrl}/deleteMarathons/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your marathon has been deleted.",
                                icon: "success"
                            });
                            myCreatedMarathon()
                        }
                    })

                    
            }
        });







        // const deleteReq = await fetch(`${import.meta.env.VITE_baseUrl}/deleteMarathons/${id}`, {
        //     method: "DELETE"
        // })

        // const deleteRes = await deleteReq.json()

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
                            <td>{item.marathonStarts.slice(0, 10)}</td>
                            <td className='md:space-x-2 flex flex-col gap-2 md:flex-row'>
                                <button onClick={() => handleMyMarathonModal(item._id)} className='btn btn-primary hover:bg-lime-300 hover:text-black'> Update </button>
                                <button onClick={()=>handleMarathonDelete(item._id)} className='btn btn-primary hover:bg-red-600 hover:text-white'> Delete </button>
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