import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";


const Root = () => {
   
    const {user} = useContext(AuthContext);
    return (
        <div>
            {!user ||   <Navbar></Navbar>}
           <Outlet></Outlet> 
         {  !user||<Footer></Footer>}
        </div>
    );
};

export default Root;