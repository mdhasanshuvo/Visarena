import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AuthLayout from '../LayoutComponent/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import AddVisa from '../pages/AddVisa';

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/addVisa',
    element : <AddVisa></AddVisa>
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