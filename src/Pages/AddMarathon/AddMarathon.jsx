import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/ContextProvider';
import { useNavigate } from 'react-router';


const AddMarathon = () => {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [marathonDate, setMarathonDate] = useState(null)
    const [distance, setDistance] = useState('')

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()
    


    const handleAddMarathon = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.marathon.value
        const location = form.location.value
        // const distance = form.distance.value
        const description = form.description.value
        const url = form.url.value
        const user = form.user.value 
        const userEmail = form.userEmail.value 


        const addMarathon = {
            name, location, description, url,user,userEmail,
            registrationStarts: startDate,
            distance: distance,
            registrationEnds: endDate,
            marathonStarts: marathonDate,
            createdAt: new Date(),
            registrationCount: 0
        }

        // console.log(addMarathon)


        // sending data to backend

        fetch(`${import.meta.env.VITE_baseUrl}/allMarathon`, {
            method: "POST",
            headers: {

                "Content-type": "application/json"
            },
            body: JSON.stringify(addMarathon)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Marathon Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset()
                setStartDate(null)
                setEndDate(null)
                setMarathonDate(null)
                setDistance('')
                navigate('/dashboard/marathon-list')
            })


    }



    return (
        <div>
            <h3 className='text-center text-2xl mt-3'>Submit Details to Create Marathon</h3>


            <div className='my-7'>
                <form onSubmit={handleAddMarathon} className="fieldset bg-lime-200 border-base-300 w-auto rounded-box px-5 mx-5 border p-4">


                    <label className="label text-black text-base">Marathon Title</label>
                    <input required type="text" name='marathon' className="input w-full" placeholder="Title" />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex flex-col'>
                            <label className="label text-black text-base mb-1">Registration Starts</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat='dd/MM/yyyy'
                                className="w-full p-2 border rounded input"
                                placeholderText="Start registration date"
                                required
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className="label text-black text-base mb-1">Registration End</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat='dd/MM/yyyy'
                                className="w-full p-2 border rounded input"
                                placeholderText="Registration End date"
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label className="label text-black text-base mb-1">Marathon Starting Date</label>
                        <DatePicker
                            selected={marathonDate}
                            onChange={(date) => setMarathonDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className="w-full p-2 border rounded input"
                            placeholderText="Marathon Starting Date"
                            required
                        />
                    </div>

                    <label className="label text-black text-base">Location</label>
                    <input required type="text" name='location' className="input w-full" placeholder="Location" />

                    <label className="label text-black text-base">Running Distance</label>
                    <select required name="distance" className="select w-full" value={distance} onChange={(e)=>setDistance(e.target.value)}>
                        <option disabled value=''>Choose distance</option>
                        <option value="5k">5k</option>
                        <option value="10k">10k</option>
                        <option value="15k">15k</option>
                        <option value="20k">20k</option>
                    </select>

                    <label className="label text-black text-base">Description</label>
                    <input required type="text" name='description' className="input w-full" placeholder="Description" />

                    <label className="label text-black text-base">Marathon Image URL</label>
                    <input required type="text" name='url' className="input w-full" placeholder="PhotoURL" />

                    <label className="label text-black text-base">User Name</label>
                    <input required type="text" name='user' value={user.displayName} className="input w-full" placeholder="User Name" />

                    <label className="label text-black text-base">User Email</label>
                    <input required type="text" value={user.email} name='userEmail' className="input w-full" placeholder="User Email" />


                    <button type='submit' className="btn btn-neutral mt-4">Submit</button>
                </form>
            </div>



        </div>
    );
};

export default AddMarathon;