import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AuthLayout from '../LayoutComponent/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import AddVisa from '../pages/AddVisa';
import AllVisa from '../pages/AllVisa';
import MyAddedVisa from '../pages/MyAddedVisa';
import VisaDetails from '../pages/VisaDetails';
import AppliedVisa from '../pages/AppliedVisa';

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/allVisa',
    element: <AllVisa></AllVisa>,
    loader: () => fetch('https://visarena-server.vercel.app/visarena'),
  },
  {
    path: '/allVisa/:id',
    element: <VisaDetails></VisaDetails>,
    loader: async ({ params }) => {
      const response = await fetch(`https://visarena-server.vercel.app/visarena/${params.id}`);
      return response.json();
    },
  },
  {
    path: '/addVisa',
    element: <AddVisa></AddVisa>,
  },
  {
    path: '/myAddedVisa',
    element: <MyAddedVisa></MyAddedVisa>,
    loader: () => fetch('https://visarena-server.vercel.app/visarena'),
  },
  {
    path: '/appliedVisa',
    element: <AppliedVisa></AppliedVisa>,
    loader: () => fetch('https://visarena-server.vercel.app/appliedvisas'),
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default AppRoutes;