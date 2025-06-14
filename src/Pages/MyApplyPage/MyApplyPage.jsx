import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import MyApplyModal from '../../Components/MyApplyModal/MyApplyModal';

const MyApplyPage = () => {

    const [apply, setApply] = useState([])
    const [selectedItem, setSelectedItem] = useState([])
    const [changeId, setChangeId] = useState(null)


    const { user } = useContext(AuthContext)
    // console.log(apply)

    useEffect(() => {

        if (user?.email) {
            fetch(`${import.meta.env.VITE_baseUrl}/marathonRegistration?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setApply(data))
        }



    }, [user?.email])


    const handleUpdateModal = (id) => {

        // setChangeId(id)

        document.getElementById('my-apply-modal').showModal()

        const willChange = apply.filter(change=>(change._id == id))

        setSelectedItem(willChange)

    }

    const closeUpdateModal = () => {
        setChangeId(null)

    }


    console.log(selectedItem)


    return (
        <div className="overflow-x-auto px-2">
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
                                <button className='btn btn-primary hover:bg-red-600 hover:text-black'> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* calling modal from here */}

            {

                changeId && (
                    <MyApplyModal selectedItem={selectedItem} closeUpdateModal={closeUpdateModal} ></MyApplyModal>
                )

            }







        </div>
    );
};

export default MyApplyPage;