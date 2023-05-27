import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../components/Login/Login';
import Registration from '../components/Login/Registration';
import Home from '../components/Pages/Home/Home';
import AllToys from '../components/Pages/AllToys/AllToys';
import AddAToy from '../components/Pages/AddAToy/AddAToy';
import MyToys from '../components/Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute';
import SingleToy from '../components/Pages/SingleToy/SingleToy';
import ToyDetails from '../components/Pages/ToyDetails/ToyDetails';
import UpdateToys from '../components/Pages/UpdateToys/UpdateToys';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Blogs from '../components/Pages/Blogs/Blogs';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://super-heros-server.vercel.app/allToys')
            },
            {
                path:'/allToys/:id',
                element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://super-heros-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: '/addAToy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/myToys/:id',
                element: <PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>,
                loader:({params})=> fetch(`https://super-heros-server.vercel.app/myToys/${params.id}`)
            }
        ]
    },
]);

export default router;