

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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";
import TeacherRequestList from "../Pages/AdminPages/TeacherRequestList/TeacherRequestList";
import TeacherHome from "../LayOut/Dashboard/TeacherHome/TeacherHome";
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
          element:<PrivateRoute><Teach></Teach></PrivateRoute>
        },
        {
          path:"/signin",
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
       
        
      ]
    },
    
       // admin routes
      {
        path:"dashboard",
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children:[
          // Teachers route
          {
            path:'teacherHome',
            element:<TeacherHome></TeacherHome>
          },
          {
            path:'myProfile',
          },
          
        //  admin Routes
        {
          path:"adminHome",
          element:<AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        }
        ,
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'reqTeacher',
          element:<AdminRoute><TeacherRequestList></TeacherRequestList></AdminRoute>
        }

        ]
      }
    
  ]);

export default router;