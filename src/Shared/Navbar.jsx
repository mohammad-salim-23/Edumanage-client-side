import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"
const Navbar = () => {
    const navLinks=(
        <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allClasses">All Classes</Link></li>
        <li><Link to="/teach">Teach On 3 Idiots</Link></li>
        
        
       </>
    )
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navLinks}
        </ul>
      </div>
      <img className="hidden sm:block  mt-3 w-16 h-16 mr-5 mb-3" src={logo} alt="" />
      <p className="btn btn-ghost text-2xl text-[#BA68C8]">3 Idiots 
      </p>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  );
};

export default Navbar;
