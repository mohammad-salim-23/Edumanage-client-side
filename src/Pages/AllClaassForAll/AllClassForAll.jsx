import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllClassForAll = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classes = [], refetch } = useQuery({
      queryKey: ["classes"],
      queryFn: async () => {
        const res = await axiosPublic.get("/classes");
        return res.data;
      },
    });
  console.log(classes);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.filter(classItem=>classItem.status==='approved').map((classItem) => (
          <div key={classItem.id} className="card w-96 bg-base-100 shadow-xl">
            <img
              src={classItem.image}
              alt={classItem.title}
              className="h-96"
            />
            <h2 className="card-title">{classItem.title}</h2>
            <p className="font-semibold">Posted by: {classItem.name}</p>
            <p className="font-medium">Price: ${classItem.price}</p>
            <p className="">{classItem.description}</p>
            <p className="class-enrolment">
              Total Enrolment: {classItem.enrollment}
            </p>
            {/* /classDetails/:id */}
          <Link to={`/classDetails/${classItem._id}`}>
          <button className="btn btn-success btn-outline btn-block">Enroll</button>
          </Link>
        
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClassForAll;
