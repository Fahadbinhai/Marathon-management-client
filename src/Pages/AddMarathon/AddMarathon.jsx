import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddMarathon = () => {
    return (
        <div>
            <h3 className='text-center mt-3'>Submit Details to Create Marathon</h3>


            <div className='my-7'>
                <form className="fieldset bg-lime-200 border-base-300 w-auto rounded-box px-5 mx-5 border p-4">


                    <label className="label text-black text-base">Marathon Title</label>
                    <input type="text" className="input w-full" placeholder="Title" />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex flex-col'>
                            <label className="label text-black text-base mb-1">Registration Starts</label>
                            <DatePicker
                                selected={``}
                                onChange={``}
                                className="w-full p-2 border rounded input"
                                placeholderText="Start registration date"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className="label text-black text-base mb-1">Registration End</label>
                            <DatePicker
                                selected={``}
                                onChange={``}
                                className="w-full p-2 border rounded input"
                                placeholderText="Registration End date"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label className="label text-black text-base mb-1">Marathon Starting Date</label>
                        <DatePicker
                            selected={``}
                            onChange={``}
                            className="w-full p-2 border rounded input"
                            placeholderText="Registration End date"
                        />
                    </div>

                    <label className="label text-black text-base">Location</label>
                    <input type="text" className="input w-full" placeholder="Location" />

                    <label className="label text-black text-base">Running Distance</label>
                    <select name="distance" className="select w-full">
                        <option disabled selected>Choose distance</option>
                        <option value="5k">5k</option>
                        <option value="10k">10k</option>
                        <option value="15k">15k</option>
                        <option value="20k">20k</option>
                    </select>

                    <label className="label text-black text-base">Description</label>
                    <input type="text" className="input w-full" placeholder="Description" />

                    <label className="label text-black text-base">Marathon Image URL</label>
                    <input type="url" className="input w-full" placeholder="PhotoURL" />


                    <button type='submit' className="btn btn-neutral mt-4">Submit</button>
                </form>
            </div>



        </div>
    );
};

export default AddMarathon;