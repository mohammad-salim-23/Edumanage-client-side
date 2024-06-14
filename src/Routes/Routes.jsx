import { createBrowserRouter } from "react-router-dom";
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
import PaymantPage from "../Pages/PaymentPage/PaymantPage";
import MyEnrollClass from "../LayOut/Dashboard/StudentDashboard/MyEnrollClass";
import ErrorPage from "../Pages/ErrorPage";
import Review from "../Pages/Review";
import Update from "../Pages/TeacherRoute/Update/Update";
import SeeDetails from "../Pages/TeacherRoute/SeeDetails/SeeDetails";
import MyEnrollClassDetails from "../LayOut/Dashboard/StudentDashboard/MyEnrollClassDetails/MyEnrollClassDetails";
// import Feedback from "../Component/Feedback/Feedback"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allClasses",
        element: <AllClassForAll></AllClassForAll>,
      },
      {
        path: "teach",
        element: (
          <PrivateRoute>
            <Teach></Teach>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/classDetails/:id",
        element: (
          <PrivateRoute>
            <ClassDetails></ClassDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://educationalwebsite-sigma.vercel.app/class/${params.id}`
          ),
      },
      {
        path: "/pay/:id",
        element: <PaymantPage></PaymantPage>,
        loader: ({ params }) =>
          fetch(
            `https://educationalwebsite-sigma.vercel.app/payment/${params.id}`
          ),
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },

  // admin routes
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "myEnrollment",
        element: <MyEnrollClass></MyEnrollClass>,
      },
      {
        path: "myenroll-class/:id",
        element: <MyEnrollClassDetails></MyEnrollClassDetails>,
        loader: ({ params }) =>
          fetch(
            `https://educationalwebsite-sigma.vercel.app/class/${params.id}`
          ),
      },

      // Teachers route
      {
        path: "teacherHome",
        element: <TeacherHome></TeacherHome>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://educationalwebsite-sigma.vercel.app/class/${params.id}`
          ),
      },
      {
        path: "my-class/:id",
        element: <SeeDetails></SeeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://educationalwebsite-sigma.vercel.app/class/${params.id}`
          ),
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },

      //  admin Routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "reqTeacher",
        element: (
          <AdminRoute>
            <TeacherRequestList></TeacherRequestList>
          </AdminRoute>
        ),
      },
      {
        path: "allClass",
        element: (
          <AdminRoute>
            <AllClass></AllClass>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
