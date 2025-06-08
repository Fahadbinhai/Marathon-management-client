import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { FaBars } from 'react-icons/fa';

const DashBoard = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Topbar for Mobile */}
            <div className="bg-lime-800 mt-2 text-white flex justify-between items-center px-4 py-3 md:hidden">
                <h2 className="text-xl font-semibold">Dashboard</h2>
                <button onClick={toggleSidebar}>
                    <FaBars className="text-2xl" />
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`bg-lime-200 w-full md:w-1/4 lg:w-1/5 p-5 border-r space-y-4 md:block ${showSidebar ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col space-y-3">
                    <Link to='/dashboard/add-marathon' className="hover:underline text-lg">Add Marathon</Link>
                    <Link to='/dashboard/marathon-list' className="hover:underline text-lg">My Marathon List</Link>
                    <Link to='/dashboard/my-apply' className="hover:underline text-lg">My Apply List</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-lime-50">
                <Outlet />
            </main>
        </div>
    );
};

export default DashBoard;
