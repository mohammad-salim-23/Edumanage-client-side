import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Component/AuthContext/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useTeacher from "../hooks/useTeacher/useTeacher";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li className="text-[18px]">
        <Link to="/">Home</Link>
      </li>
      <li className="text-[18px]">
        <Link to="/allClasses">All Classes</Link>
      </li>
      <li className="text-[18px]">
        <Link to="/teach">Teach On 3 Idiots</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome"> Dashboard</Link>
        </li>
      )}
       {user && isTeacher  && !isAdmin &&(
        <li>
          <Link to="/dashboard/teacherHome"> Dashboard</Link>
        </li>
      )}

    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="hidden sm:block mt-3 w-16 h-16 mr-5 mb-3"
          src={logo}
          alt=""
        />
        <p className="btn btn-ghost text-2xl text-primaryColor">3 Idiots</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to="/signin">
            <button className="btn bg-primaryColor">SignIn</button>
          </Link>
        ) : (
          <div className="relative">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <img onClick={toggleDropdown} src={user?.photoURL} alt="" />
            </label>
            {showDropdown && (
              <div className="absolute top-full right-0 mt-1 w-52 shadow rounded-md font-bold bg-black text-white z-10">
                <ul className="p-2">
                  {user && <li>{user.displayName}</li>}
                  <li onClick={closeDropdown}>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>LogOut</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
