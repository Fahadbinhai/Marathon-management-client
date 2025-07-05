import React, { useContext, useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/ContextProvider';
import Swal from 'sweetalert2';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Lottie from 'lottie-react';
import registerAnimation from '../../assets/lottieAnimation/register.json';

const Register = () => {

    useEffect(() => {
        document.title = 'Marathon || Register';
    }, []);

    const [see, setSee] = useState(false);
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSeePassword = () => {
        setSee(!see);
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        try {
            const newUser = await register(email, password, name, photo);

            if (newUser) {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "You have Register successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/');
            }
        } catch (error) {
            if (error) {
                Swal.fire({
                    position: "middle",
                    icon: "warning",
                    title: "Unable to Register",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <section className='bg-lime-100 min-h-screen flex justify-center items-center relative p-4'>
            {/* Back Button */}
            <Link className='text-center btn btn-primary absolute top-5 left-5' to='/'>
                <FaArrowCircleLeft />
            </Link>

            {/* Wrapper */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
                {/* Register Form */}
                <div className="w-full max-w-md p-6 md:p-8 space-y-3 rounded-xl bg-lime-400 shadow-md">
                    <h1 className="text-2xl font-bold text-center">Register Here</h1>
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="username" className="block text-black">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="username"
                                placeholder="Username"
                                className="w-full px-4 py-3 rounded-md border bg-white text-black"
                            />

                            <label htmlFor="email" className="block text-black">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md border bg-white text-black"
                            />

                            <label htmlFor="url" className="block text-black">PhotoURL</label>
                            <input
                                type="url"
                                name="photo"
                                id="photo"
                                placeholder="photoURL"
                                className="w-full px-4 py-3 rounded-md border bg-white text-black"
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <p className='text-sm mb-3'>**Use at least 6 characters, including a capital letter, a number and a special character**</p>
                            <label htmlFor="password" className="block text-black">Password</label>
                            <div className='flex items-center relative'>
                                <input
                                    minLength={6}
                                    pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$"
                                    type={see ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md border bg-white text-black"
                                />
                                <button
                                    type='button'
                                    onClick={handleSeePassword}
                                    className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-900'
                                >
                                    {see ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                        </div>

                        <button type='submit' className="btn btn-ghost w-full p-3 text-center rounded-sm bg-blue-500 hover:bg-blue-600 text-white">
                            Register
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-center text-black">
                        Already have an account?
                        <Link to='/login' className="underline text-blue-600 ml-1">Login</Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="max-w-sm w-full">
                    <Lottie animationData={registerAnimation} loop={true} />
                </div>
            </div>
        </section>
    );
};

export default Register;
