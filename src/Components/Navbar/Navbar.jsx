import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/marathon-logo.jpg'
import { AuthContext } from '../../Context/ContextProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)


    const links = <>

        <div className='flex flex-col md:flex-row gap-4 text-lg'>
            <NavLink className={({isActive})=> isActive? 'text-blue-600 underline' : ''} to='/'>Home</NavLink>
            <NavLink className={({isActive})=> isActive? 'text-blue-600 underline' : ''} to='/marathons'>Marathons</NavLink>

            {
                user && <NavLink className={({isActive})=> isActive? 'text-blue-600 underline' : ''} to='/dashboard'>DashBoard</NavLink>
            }

        </div>

    </>


    const handleLogout = () => {

        logout()

    }


    return (
        <div className="navbar bg-lime-500 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-lg sm:block hidden ' src={logo} alt="" />
                    <Link to='/' className="btn btn-ghost text-xl">Marathon</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <>
                        <div className="avatar">
                            <div className="w-10 mt-0.5 rounded-full">
                                <img src={user.photoURL} />

                            </div>
                        </div>
                        <button onClick={handleLogout} className='btn'>Logout</button>
                    </> : <>
                        <Link to='/login' className="btn">Login</Link>
                        <Link to='/register' className="btn">Register</Link>
                    </>


                }
            </div>
        </div>
    );
};

export default Navbar;