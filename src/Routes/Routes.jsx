import React from 'react';
import {
    createBrowserRouter
} from "react-router";
import MainPage from '../Components/MainPage/MainPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import Register from '../Pages/Register/Register';
import DashBoard from '../Pages/DashBoard/DashBoard';
import Home from '../Pages/Home/Home';
import AddMarathon from '../Pages/AddMarathon/AddMarathon';
import MyMarathonList from '../Pages/MyMarathonList/MyMarathonList';
import MyApplyPage from '../Pages/MyApplyPage/MyApplyPage';
import AllMarathons from '../Pages/AllMarathons/AllMarathons';
import DetailsPage from '../Pages/DetalisPage/DetailsPage';



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainPage,
        errorElement: <p>Error 404 page not found</p>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {

                path: 'dashboard',
                Component: DashBoard,
                children:[
                    {
                        path: 'add-marathon',
                        Component: AddMarathon
                    },
                    {
                        path: 'marathon-list',
                        Component: MyMarathonList
                    },
                    {
                        path: 'my-apply',
                        Component: MyApplyPage
                    }
                ]

            },
            {
                path: 'marathons',
                Component: AllMarathons,
                loader: ()=> fetch(`${import.meta.env.VITE_baseUrl}/allMarathon`)
            },
            {
                path: 'marathonDetails/:id',
                Component: DetailsPage,
                loader: ({params})=> fetch(`${import.meta.env.VITE_baseUrl}/allMarathon/${params.id}`)
            }
        ]
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