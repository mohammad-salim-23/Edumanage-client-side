import { useContext } from "react";
import { AuthContext } from "../../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";


const MyEnrollClass = () => {
    const {user,loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
   
    const {data:classes=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/classes/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-4xl text-center">My enrollment classes</h2>

        </div>
    );
};

export default MyEnrollClass;