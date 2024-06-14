import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const BasicInformation = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosPublic.get("/users");
      return result.data;
    },
  });
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const result = await axiosPublic.get("/classes");
      return result.data;
    },
  });
  console.log(classes);
//   calculate total enrollment
const totalEnrollment = classes.reduce((total,cls)=>total+(cls.enrollment || 0),0)

  return (
    <div>
         <h2 className=" text-xl text-center font-bold mb-4">At a glance 3 Idiots Academy</h2>
    <div className="md:flex justify-between container mx-auto">
    <div className="md:pl-20">
        <img className="h-96 md:w-full w-96" src="https://i.ibb.co/QcSccWH/front-view-young-man-giving-strange-pose-pink-background.jpg" alt="" />
      </div>
      <div>
        <div className="card md:h-96 w-96 bg-base-100 shadow-xl ">
          <div className="card-body md:pr-20 space-y-4">
           
           <h3 className="text-xl font-medium">Total Users:{users.length}</h3>
           <h3 className="text-xl font-medium">Total Classes:{classes.length}</h3>
           <h3 className="text-xl font-medium">Total Enrollment:{totalEnrollment}</h3>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BasicInformation;
