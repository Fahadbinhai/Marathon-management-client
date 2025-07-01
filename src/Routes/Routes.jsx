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
import MarathonRegistrationPage from '../Pages/MarathonRegistrationPage/MarathonRegistrationPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AllBlogs from '../Pages/AllBlogs/AllBlogs';



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainPage,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {

                path: 'dashboard',
                // Component: DashBoard,
                element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>,
                children: [
                    {
                        index: true,
                        // Component: AddMarathon
                        element: <PrivateRoute> <AddMarathon></AddMarathon> </PrivateRoute>
                    },
                    {
                        path: 'marathon-list',
                        // Component: MyMarathonList
                        element: <PrivateRoute> <MyMarathonList></MyMarathonList> </PrivateRoute>
                    },
                    {
                        path: 'my-apply',
                        // Component: MyApplyPage
                        element: <PrivateRoute> <MyApplyPage></MyApplyPage> </PrivateRoute>
                    }
                ]

            },
            {
                path: 'marathons',
                // Component: AllMarathons,
                element: <AllMarathons></AllMarathons>,
                loader: () => fetch(`${import.meta.env.VITE_baseUrl}/allMarathon`)
            },
            {
                path: 'marathonDetails/:id',
                // Component: DetailsPage,
                element: <PrivateRoute> <DetailsPage></DetailsPage> </PrivateRoute>,
                // loader: ({params})=> fetch(`${import.meta.env.VITE_baseUrl}/allMarathon/${params.id}`)
            },
            {
                path: 'marathonRegistrationPage/:id',
                Component: MarathonRegistrationPage,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_baseUrl}/allMarathon/${params.id}`)
            },
            {
                path: '/allBlogs',
                element: <PrivateRoute> <AllBlogs></AllBlogs> </PrivateRoute>
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