

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Component/Root";
import Home from "../Pages/Home/Home";
import AllClass from "../Pages/AllClass/AllClass";
import Teach from "../Pages/Teach/Teach";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AllUsers from "../Pages/AdminPages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'allClasses',
          element:<AllClass></AllClass>
        },
        {
          path:'teach',
          element:<Teach></Teach>
        },
        {
          path:"/signin",
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        // admin routes
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
        
      ]
    },
  ]);

export default router;