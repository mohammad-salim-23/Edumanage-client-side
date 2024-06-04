

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
import MyProfile from "../hooks/MyProfile/MyProfile";
import MyClass from "../Pages/TeacherRoute/MyClass";
import AddClass from "../Pages/TeacherRoute/AddClass";
import AllClassForAll from "../Pages/AllClaassForAll/AllClassForAll";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
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
          element:<AllClassForAll></AllClassForAll>
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
        {
          path:'/classDetails/:id',
          element:<PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/class/${params.id}`)
        }
       
        
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
            element:<MyProfile></MyProfile>
          },
          {
            path:'myClass',
            element:<MyClass></MyClass>
          },
          {
            path:'addClass',
            element:<AddClass></AddClass>
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
        },
        {
          path:'allClass',
          element:<AdminRoute><AllClass></AllClass></AdminRoute>
        }

        ]
      }
    
  ]);

export default router;