import { NavLink,Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { FaBroom, FaChalkboardTeacher, FaHome, FaSchool, FaUser, FaUserAlt } from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import useTeacher from "../../hooks/useTeacher/useTeacher";
import useStudent from "../../hooks/useStudent/useStudent";
import { IoBookOutline } from "react-icons/io5";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();
    const [isStudent] = useStudent();
    return (
        <div className="flex gap-8">
            <div className="w-64 min-h-screen bg-green-300">
        <ul className="menu">
         {
          isAdmin ?
          <>
             <li>
             <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/reqTeacher">
              <FaChalkboardTeacher></FaChalkboardTeacher>
              Teacher Request
            </NavLink>

          </li>
          <li>
            <NavLink to="/dashboard/users">
             <FaUser></FaUser>
             Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allClass">
            <FaBroom></FaBroom>
             All Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myProfile">
            <FaPersonRifle></FaPersonRifle>
             My Profile
            </NavLink>
          </li>
          </>
          :""
         }
         {
            isTeacher && !isAdmin && 
           <>
           
          <li>
            <NavLink to="/dashboard/addClass">
            <FaSchool></FaSchool>
             Add Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myClass">
             <FaSchool></FaSchool>
             My Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myProfile">
            <FaUserAlt></FaUserAlt>
             My Profile
            </NavLink>
          </li>
           </>
         }
         {
          isStudent && !isTeacher && !isAdmin && <>
           <li>
            <NavLink to="/dashboard/myEnrollment">
            <IoBookOutline />
             My EnRoll Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myProfile">
            <FaUserAlt></FaUserAlt>
             My Profile
            </NavLink>
          </li>
          </>
         }
         <div className="divider">
         </div>
            {/* shared nav links */}
            <li>
                <NavLink to="/">
                    <FaHome></FaHome>
                    Home
                </NavLink>
            </li>
         
          </ul>
          
          </div>
         <div className="flex-1 p-8"> 
         <Outlet></Outlet>
         </div>
        </div>
    );
};

export default Dashboard;