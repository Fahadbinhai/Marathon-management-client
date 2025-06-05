import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import MainPage from '../Components/MainPage/MainPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import Register from '../Pages/Register/Register';


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainPage
    },
    {
        path: "login",
        Component: LoginPage
    },
    {
        path: 'register',
        Component: Register
    }
]);

export default router;