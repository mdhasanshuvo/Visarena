import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
  ]);

export default AppRoutes;