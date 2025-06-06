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



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainPage,
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