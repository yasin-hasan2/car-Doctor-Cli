import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import About from "../components/pages/about/About";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/signUp/SignUp";

// import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
