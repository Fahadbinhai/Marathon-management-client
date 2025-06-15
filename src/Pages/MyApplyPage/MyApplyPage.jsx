import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import MyApplyModal from '../../Components/MyApplyModal/MyApplyModal';
import Swal from 'sweetalert2';
import { IoSearchOutline } from 'react-icons/io5';

const MyApplyPage = () => {

    const [apply, setApply] = useState([])
    const [selectedItem, setSelectedItem] = useState([])
    const [searchText, setSearchText] = useState('')



    const { user, getAccessToken } = useContext(AuthContext)
    console.log(apply)

    useEffect(() => {

        if (user?.email) {
            loadApplyData()
        }



    }, [user?.email])

    // loading data using function
    const loadApplyData = async () => {

        const token = await getAccessToken();

        console.log('jwt', token)

        const res = await fetch(`${import.meta.env.VITE_baseUrl}/marathonRegistration?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })


        const data = await res.json()

        setApply(data)



        // .then(res => res.json())
        // .then(data => setApply(data))

    }


    const handleUpdateModal = (id) => {

        // setChangeId(id)

        document.getElementById('my-apply-modal').showModal()

        const willChange = apply.find(change => (change._id == id))

        setSelectedItem(willChange)

    }

    const closeUpdateModal = () => {

        document.getElementById('my-apply-modal').close();

    }


    // handle cancel registration

    const handleCancelRegistration = (id, countId) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure to Cancel it?",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_baseUrl}/cancelRegistration/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Registration has been Successfully Canceled!",
                                icon: "success"

                            });

                            fetch(`${import.meta.env.VITE_baseUrl}/decreasingRegisterCount/${countId}`, {
                                method: 'PATCH',
                                headers: {
                                    "Content-type": "Application/json"
                                },

                            })
                                .then(res => res.json())
                                .then(() => {
                                    loadApplyData();

                                })

                        }
                    })

            }

        })
    }

    const handleSearch = (e) => {
        e.preventDefault()

        fetch(`${import.meta.env.VITE_baseUrl}/marathonRegistration?email=${user?.email}&search=${searchText}`)
            .then(res => res.json())
            .then(searchData => setApply(searchData))

    }




    return (
        <div className="overflow-x-auto px-2">

            <h3 className='mb-5 text-3xl text-center font-medium'>You have Register for following Marathons</h3>

            <table className="table w-full min-w-[600px] text-sm md:text-base">
                {/* head */}
                <thead className="bg-lime-200 text-gray-700">
                    <tr>
                        <th>#</th>
                        <th>Marathon</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>
                            <form onSubmit={handleSearch} className='flex justify-center items-center gap-1'>
                                <input className='border rounded w-[10rem] h-[2rem] bg-white'
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    type="text" />
                                <button type='submit' className='btn btn-primary h-[2rem]'><IoSearchOutline /></button>
                            </form>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {apply.map((item, index) => (
                        <tr key={item._id} className="hover:bg-gray-50">
                            <td>{index + 1}</td>
                            <td>{item.marathon}</td>
                            <td>{item.fullName}</td>
                            <td>{item.gender}</td>
                            <td>{item.contact}</td>
                            <td className='md:space-x-2 flex flex-col gap-2 md:flex-row'>
                                <button onClick={() => handleUpdateModal(item._id)} className='btn btn-primary hover:bg-lime-300 hover:text-black'> Update </button>
                                <button
                                    onClick={() => handleCancelRegistration(item._id, item.marathonId)} className='btn btn-primary hover:bg-red-600 hover:text-white'> Cancel </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* calling modal from here */}

            {

                selectedItem && (
                    <MyApplyModal selectedItem={selectedItem} closeUpdateModal={closeUpdateModal} loadApplyData={loadApplyData} ></MyApplyModal>
                )

            }







        </div>
    );
};

export default MyApplyPage;