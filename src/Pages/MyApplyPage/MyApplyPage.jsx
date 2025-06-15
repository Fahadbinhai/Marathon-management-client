import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import MyApplyModal from '../../Components/MyApplyModal/MyApplyModal';

const MyApplyPage = () => {

    const [apply, setApply] = useState([])
    const [selectedItem, setSelectedItem] = useState([])



    const { user } = useContext(AuthContext)
    // console.log(apply)

    useEffect(() => {

        if (user?.email) {
            loadApplyData()
        }



    }, [user?.email])

    // loading data using function
    const loadApplyData = () => {

        fetch(`${import.meta.env.VITE_baseUrl}/marathonRegistration?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setApply(data))

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


    // console.log(selectedItem)


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
                        <th></th>
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
                                <button className='btn btn-primary hover:bg-red-600 hover:text-white'> Delete </button>
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