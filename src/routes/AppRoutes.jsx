import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AuthLayout from '../LayoutComponent/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
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
      // {
      //   path: "/auth/forgot-password",
      //   element: <ForgotPassword></ForgotPassword>
      // },
    ]
  },
]);

export default AppRoutes;