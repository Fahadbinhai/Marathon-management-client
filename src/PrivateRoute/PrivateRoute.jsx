import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-xl mt-[22rem] ml-[35rem]"></span>
    }

    if (!user && !user?.email) {
        return <Navigate to='/login'></Navigate>
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;