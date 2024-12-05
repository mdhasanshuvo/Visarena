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

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/allVisa',
    element: <AllVisa></AllVisa>,
    loader: () => fetch('http://localhost:5000/visarena'),
  },
  {
    path: '/allVisa/:id',
    element: <VisaDetails></VisaDetails>,
    loader: async ({ params }) => {
      const response = await fetch(`http://localhost:5000/visarena/${params.id}`);
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
    loader: () => fetch('http://localhost:5000/visarena'),
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