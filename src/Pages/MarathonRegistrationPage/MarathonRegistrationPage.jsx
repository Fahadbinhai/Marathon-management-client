import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/ContextProvider';

const MarathonRegistrationPage = () => {

    useEffect(() => {
                document.title = 'Marathon || Registration Page';
            }, []);

    const [gender, setGender] = useState('')
    const {user} = useContext(AuthContext)

    const registrationData = useLoaderData();

    const navigate = useNavigate()

    const { _id, marathonStarts,name } = registrationData;

    const date = marathonStarts;
    const formattedDate = new Date(date).toLocaleDateString('en-GB');



    const handleRegistration = async (e) => {
        e.preventDefault()

        const form = e.target;
        const marathon = form.marathon.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const gender = form.gender.value;
        const contact = form.contact.value;
        const marathonStart = form.marathonStart.value;
        const userEmail = form.userEmail.value;

        const fullName = `${firstName} ${lastName}`


        const formData = {
            marathon, fullName, gender, contact, marathonStart, userEmail, marathonId:_id
        }

        // console.log(formData)


        // fetch(`${import.meta.env.VITE_baseUrl}/marathonRegistration`, {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log('after adding to register collection', data))


        try {

            // data adding to the registration collection

            const registration = await fetch(`${import.meta.env.VITE_baseUrl}/marathonRegistration`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const response = await registration.json();

            if (registration.status === 400) {
                Swal.fire({
                    position: "middle",
                    icon: "warning",
                    title: "You have already Register",
                    showConfirmButton: false,
                    timer: 2000
                });

                return
            }


            const updateCount = await fetch(`${import.meta.env.VITE_baseUrl}/updateRegisterCount/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },

            })

            const updateData = await updateCount.json();


            if (response.insertedId && updateData.modifiedCount > 0) {

                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Successfully Registered",
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset();
                setGender('')
                navigate('/dashboard/my-apply')

                return

            }




        }
        catch (error) {
            if (error) {
                Swal.fire({
                    position: "middle",
                    icon: "warning",
                    title: "Unable to Register",
                    showConfirmButton: false,
                    timer: 2000
                });

            }
        }










        // for update registration count

        // fetch(`${import.meta.env.VITE_baseUrl}/updateRegisterCount/${_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },

        // })
        //     .then(res => res.json())
        //     .then(updateData => console.log('after increase registration count', updateData))

    }




    return (
        <div className='pb-5'>
            <h3 className='text-center text-2xl mt-3'>Provide Details For join</h3>


            <div className='my-7'>
                <form onSubmit={handleRegistration} className="fieldset bg-lime-200 border-base-300 w-auto rounded-box px-5 mx-5 border p-4">


                    <label className="label text-black text-base">Marathon Title</label>
                    <input required type="text" name='marathon' className="input w-full" readOnly value={name || ''} placeholder="Title" />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex flex-col'>
                            <label className="label text-black text-base mb-1">First Name</label>
                            <input required className='w-full p-2 border rounded input' type="text" name="firstName" id="" placeholder='First Name' />
                        </div>

                        <div className='flex flex-col'>
                            <label className="label text-black text-base mb-1">Last Name</label>
                            <input required placeholder='Last Name' className='w-full border rounded input' type="text" name="lastName" id="" />

                        </div>
                    </div>

                    {/* <div className='flex flex-col'>
                        <label className="label text-black text-base mb-1">Marathon Starting Date</label>
                        <DatePicker
                            selected={marathonDate}
                            onChange={(date) => setMarathonDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className="w-full p-2 border rounded input"
                            placeholderText="Marathon Starting Date"
                            required
                        />
                    </div> */}

                    <label className="label text-black text-base">Gender</label>
                    {/* <input required type="text" name='' className="input w-full" placeholder="Gender" /> */}
                    <select required value={gender} onChange={e => setGender(e.target.value)} className="select w-full" name="gender" id="">
                        <option value="" disabled>---- select ----</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    {/* <label className="label text-black text-base">Running Distance</label>
                    <select required name="distance" className="select w-full" value={distance} onChange={(e) => setDistance(e.target.value)}>
                        <option disabled value=''>Choose distance</option>
                        <option value="5k">5k</option>
                        <option value="10k">10k</option>
                        <option value="15k">15k</option>
                        <option value="20k">20k</option>
                    </select> */}

                    <label className="label text-black text-base">Contact Number</label>
                    <input required type="text" name='contact' className="input w-full" placeholder="Contact Number" />

                    <label className="label text-black text-base">Marathon Starts Date</label>
                    <input readOnly required type="text" name='marathonStart' className="input w-full" value={formattedDate || ''} placeholder="Marathon Starts Date" />

                    {/* <label className="label text-black text-base">User Name</label>
                    <input required type="text" name='user' value={``} className="input w-full" placeholder="User Name" /> */}

                    <label className="label text-black text-base">User Email</label>
                    <input readOnly required type="text" value={user?.email || ''} name='userEmail' className="input w-full" placeholder="User Email" />


                    <button type='submit' className="btn btn-neutral mt-4">Submit</button>
                </form>
            </div>



        </div>
    );
};

export default MarathonRegistrationPage;