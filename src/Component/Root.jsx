import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";
import './All.css'

const Root = () => {
   
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="bg-primaryColor navbarr text-black mb-96">
            <Navbar></Navbar>
            </div>
          <div className="mt-24"> <Outlet></Outlet> </div>
           <div className="divider"></div>
          <Footer></Footer>
        </div>
    );
};

export default Root;