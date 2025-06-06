import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router';

const Register = () => {
    const [see, setSee] = useState(false)

    const handleSeePassword = () => {
        setSee(!see)
    }


    // handle register

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target 
        const name = form.name.value 
        const email = form.email.value 
        const photo = form.photo.value 
        const password = form.password.value 

        console.log(name,email,photo,password)

    }



    return (
        <section className='bg-lime-100 min-h-screen p-10'>
            <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-lime-400">
                <h1 className="text-2xl font-bold text-center">Register Here</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block text-black">Name</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        <label htmlFor="email" className="block text-black">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        <label htmlFor="url" className="block text-black">PhotoURL</label>
                        <input type='url' name="photo" id="photo" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-black">Password</label>

                        <div className='flex items-center relative'>
                            <input type={see ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                            <div>
                                {
                                    see ?
                                        <button type='button' onClick={handleSeePassword} className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-900'><FaRegEyeSlash /></button> :
                                        <button type='button' onClick={handleSeePassword} className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-900'><FaRegEye /></button>

                                }
                            </div>
                        </div>

                    </div>
                    <button type='submit' className="btn btn-ghost w-full p-3 text-center rounded-sm bg-blue-500 hover:bg-blue-600">Register</button>
                </form>


                <p className="mt-16 text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' className="underline text-blue-600">Login</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;