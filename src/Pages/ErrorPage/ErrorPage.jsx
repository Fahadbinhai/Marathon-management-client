import React from 'react';
import error from '../../assets/images/errorPage.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-full max-h-screen' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;