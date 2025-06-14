import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import Swal from 'sweetalert2';

const MyApplyModal = ({ selectedItem, closeUpdateModal, loadApplyData }) => {
    const { user } = useContext(AuthContext);
    // console.log(selectedItem)

    const { marathon, fullName, gender, contact, marathonStart, _id } = selectedItem;

    // console.log(_id)


    // Local state for gender select
    const [genderSelected, setGenderSelected] = useState(gender);

    const handleUpdateRegistration = async (e) => {
        e.preventDefault();

        const form = e.target;

        const fullName = form.fullname.value
        const gender = form.gender.value
        const contact = form.contact.value


        const submitUpdateData = {
            fullName, gender, contact
        }

        // console.log(submitUpdateData)


        try {
            const updateReq = await fetch(`${import.meta.env.VITE_baseUrl}/updateRegistration/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(submitUpdateData)
            })

            const updateRes = await updateReq.json();

            console.log("after update data", updateRes)

            if (updateRes.modifiedCount > 0) {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Updated Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            }

            form.reset()
            loadApplyData()
            

        }
        catch (error) {
            if(error){
                Swal.fire({
                    position: "middle",
                    icon: "warning",
                    title: "Ops! Unable to update",
                    showConfirmButton: false,
                    timer: 2000
                });

            }
        }








        closeUpdateModal();
    };

    return (
        <dialog id="my-apply-modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-lime-100">
                <h2 className="text-xl font-bold mb-4">Update Registration</h2>

                <form onSubmit={handleUpdateRegistration} className="space-y-4">
                    {/* Marathon Title */}
                    <div>
                        <label className="label text-black text-base">Marathon Title</label>
                        <input
                            required
                            type="text"
                            name="marathon"
                            className="input w-full"
                            readOnly
                            value={marathon || ''}
                            placeholder="Title"
                        />
                    </div>

                    {/* First Name & Last Name */}
                    <div className="">
                        <div>
                            <label className="label text-black text-base">Name</label>
                            <input
                                required
                                className="input w-full"
                                type="text"
                                name="fullname"
                                defaultValue={fullName}
                                placeholder="Full Name"
                            />
                        </div>

                        {/* <div>
                            <label className="label text-black text-base">Last Name</label>
                            <input
                                required
                                className="input w-full"
                                type="text"
                                name="lastName"
                                defaultValue={`${selectedItem?.lastName || ''}`}
                                placeholder="Last Name"
                            />
                        </div> */}
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="label text-black text-base">Gender</label>
                        <select
                            required
                            value={genderSelected}
                            onChange={(e) => setGenderSelected(e.target.value)}
                            className="select w-full"
                            name="gender"
                        >
                            <option value="" disabled>---- select ----</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label className="label text-black text-base">Contact Number</label>
                        <input
                            required
                            type="text"
                            name="contact"
                            className="input w-full"
                            defaultValue={contact}
                            placeholder="Contact Number"
                        />
                    </div>

                    {/* Marathon Start Date */}
                    <div>
                        <label className="label text-black text-base">Marathon Starts Date</label>
                        <input
                            readOnly
                            required
                            type="text"
                            name="marathonStart"
                            className="input w-full"
                            value={marathonStart || ''}
                            placeholder="Marathon Starts Date"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="label text-black text-base">User Email</label>
                        <input
                            readOnly
                            required
                            type="text"
                            value={user?.email || ''}
                            name="userEmail"
                            className="input w-full"
                            placeholder="User Email"
                        />
                    </div>

                    <div className="modal-action flex justify-end">
                        <button type="submit" className="btn btn-neutral">Submit</button>
                        <div method="dialog">
                            <button onClick={() => closeUpdateModal()} type="button" className="btn ml-2">Close</button>
                        </div>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default MyApplyModal;
