import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import MainPage from '../Components/MainPage/MainPage';


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainPage
    },
]);

export default router;