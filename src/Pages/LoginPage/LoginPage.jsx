import React, { useContext, useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/ContextProvider';
import Swal from 'sweetalert2';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/lottieAnimation/login.json';

const LoginPage = () => {
    const [see, setSee] = useState(false);
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSeePassword = () => {
        setSee(!see);
    };

    const handleLogIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const loginUser = await login(email, password);
            if (loginUser) {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "You have Logged In Successfully",
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
                    title: "Login Unsuccessful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    const handleGoogleLogin = async () => {
        const userWithGoogle = await googleLogin();
        if (userWithGoogle) {
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        }
    };

    useEffect(() => {
        document.title = 'Marathon || Login';
    }, []);

    return (
        <section className='bg-lime-100 min-h-screen flex justify-center items-center relative p-4'>
            {/* Back button */}
            <Link className='absolute top-5 left-5 btn btn-primary' to='/'>
                <FaArrowCircleLeft />
            </Link>

            {/* Wrapper for form and animation */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
                {/* Login Form */}
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-lime-400 shadow-lg">
                    <h1 className="text-2xl font-bold text-center">Login Now</h1>
                    <form onSubmit={handleLogIn} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-black">User Email</label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="User Email"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <div className='flex items-center relative'>
                                <input
                                    type={see ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                            Login
                        </button>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px bg-black"></div>
                        <p className="px-3 text-sm text-black">Login with social accounts</p>
                        <div className="flex-1 h-px bg-black"></div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>

                    <p className="text-xs text-center text-black">
                        Don't have an account?
                        <Link to='/register' className="underline text-blue-600 ml-1">Register</Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <div className="max-w-md w-full">
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
