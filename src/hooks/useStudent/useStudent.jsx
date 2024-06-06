import { useContext } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useStudent = () => {
    const {user,loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data:isStudent,isPending:isStudentLoading}=useQuery({
        queryKey:[user?.email,'isStudent'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/student/${user.email}`);
            console.log(res.data);
            return res.data?.student;
        }
    })
   return [isStudent,isStudentLoading]
};

export default useStudent;