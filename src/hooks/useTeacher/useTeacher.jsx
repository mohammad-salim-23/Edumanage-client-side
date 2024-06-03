import { useContext } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useTeacher = () => {
    const {user,loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data:isTeacher,isPending:isTeacherLoading}=useQuery({
        queryKey:[user?.email,'isTeacher'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/teacher/${user.email}`);
            console.log(res.data);
            return res.data?.teacher;
        }
    })
   return [isTeacher,isTeacherLoading]
};

export default useTeacher;