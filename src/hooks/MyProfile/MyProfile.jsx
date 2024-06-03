import { useContext } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const MyProfile = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data:users,refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`);
            console.log(res);
            return res.data;
        }
    })
    console.log(users);

    return (
        <div className="flex items-center justify-center">
            <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{users?.name}</h2>
    <p className="font-medium">{users?.role}</p>
    <p className="font-medium">{users?.email}</p>
    <p className="font-medium">{users?.phone}</p>

  </div>
  <figure><img src={user?.photoURL} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default MyProfile;