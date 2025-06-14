import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/ContextProvider';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const MyMarathonModal = ({ selectedMarathon, closingModal, myCreatedMarathon }) => {

    const { user } = useContext(AuthContext);

    const {
        _id,
        name,
        location,
        description,
        url,

        registrationStarts,
        distance,

        registrationEnds,

        marathonStarts
    } = selectedMarathon;

    const [startDate, setStartDate] = useState(registrationStarts);
    const [endDate, setEndDate] = useState(registrationEnds);
    const [marathonDate, setMarathonDate] = useState(marathonStarts);

    const [givenDistance, setGivenDistance] = useState(distance);

    const handleMyMarathonModal = async (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedData = {
            name: form.marathon.value,
            registrationStarts: startDate.toISOString(),
            registrationEnds: endDate.toISOString(),
            marathonStarts: marathonDate.toISOString(),
            location: form.location.value,
            distance: form.distance.value,
            description: form.description.value,
            url: form.url.value
        };

        console.log(updatedData)

        // fetch(`${import.meta.env.VITE_baseUrl}/updateMarathon/${_id}`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(updatedData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         myCreatedMarathon(); // reload updated data
        //         closingModal(); // close modal
        //     })
        //     .catch(err => console.log(err));

        try {

            const updateMarathonReq = await fetch(`${import.meta.env.VITE_baseUrl}/updateMarathon/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            })


            const updateRes = await updateMarathonReq.json()

            if (updateRes.modifiedCount > 0) {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Marathon Update Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                myCreatedMarathon()

                closingModal();


            }
        }
        catch (error) {
            if (error) {

                Swal.fire({
                    position: "middle",
                    icon: "warning",
                    title: "Ops!! Unable to update Marathon",
                    showConfirmButton: false,
                    timer: 2000
                });

            }
        }





    };

    return (
        <dialog id="my-marathon-modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full max-w-7xl">
                <h3 className='text-center text-2xl mb-4 font-semibold'>Update Your Marathon</h3>

                <form onSubmit={handleMyMarathonModal} className=" w-full bg-lime-200 rounded-xl p-5 space-y-4">
                    <div>
                        <label className="label text-black text-base">Marathon Title</label>
                        <input required type="text" name='marathon' defaultValue={name} className="input w-full" placeholder="Title" />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className="label text-black text-base">Registration Starts</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat='dd/MM/yyyy'
                                className="input w-full"
                                placeholderText="Start registration date"
                                required
                            />
                        </div>

                        <div>
                            <label className="label text-black text-base">Registration Ends</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat='dd/MM/yyyy'
                                className="input w-full"
                                placeholderText="End registration date"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label text-black text-base">Marathon Starting Date</label>
                        <DatePicker
                            selected={marathonDate}
                            onChange={(date) => setMarathonDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className="input w-full"
                            placeholderText="Marathon Start date"
                            required
                        />
                    </div>

                    <div>
                        <label className="label text-black text-base">Location</label>
                        <input required type="text" defaultValue={location} name='location' className="input w-full" placeholder="Location" />
                    </div>

                    <div>
                        <label className="label text-black text-base">Running Distance</label>
                        <select required name="distance" className="select w-full" value={givenDistance} onChange={(e) => setGivenDistance(e.target.value)}>
                            <option disabled value=''>Choose distance</option>
                            <option value="5k">5k</option>
                            <option value="10k">10k</option>
                            <option value="15k">15k</option>
                            <option value="20k">20k</option>
                        </select>
                    </div>

                    <div>
                        <label className="label text-black text-base">Description</label>
                        <input required type="text" defaultValue={description} name='description' className="input w-full" placeholder="Description" />
                    </div>

                    <div>
                        <label className="label text-black text-base">Marathon Image URL</label>
                        <input required type="text" defaultValue={url} name='url' className="input w-full" placeholder="Image URL" />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className="label text-black text-base">User Name</label>
                            <input required type="text" name='user' value={user?.displayName || ''} readOnly className="input w-full" />
                        </div>

                        <div>
                            <label className="label text-black text-base">User Email</label>
                            <input required type="text" name='userEmail' value={user?.email || ''} readOnly className="input w-full" />
                        </div>
                    </div>

                    <div className='flex justify-end gap-3 mt-4'>
                        <button type="submit" className="btn btn-neutral">Submit</button>
                        <button type="button" onClick={closingModal} className="btn btn-outline">Close</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default MyMarathonModal;
