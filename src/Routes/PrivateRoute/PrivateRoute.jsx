
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";


const PrivateRoute = ({children}) => {
    const location  = useLocation();
    const{user,loading} = useContext(AuthContext);
    if(loading){
      return  <progress className="progress w-56 bg-cyan-500"></progress>
    }
   if(user){
    return children;
   }
   return <Navigate to="/signin" state={{from:location}} replace> </Navigate>
};

export default PrivateRoute;