import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllClassForAll = () => {
  const { axiosPublic } = useAxiosPublic();

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/conditionalClass");
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <div key={classItem.id} className="card w-96 bg-base-100 shadow-xl">
            <img
              src={classItem.image}
              alt={classItem.title}
              className="class-image"
            />
            <h2 className="card-title">{classItem.title}</h2>
            <p className="font-semibold">Posted by: {classItem.name}</p>
            <p className="font-medium">Price: ${classItem.price}</p>
            <p className="">{classItem.description}</p>
            <p className="class-enrolment">
              Total Enrolment: {classItem.totalEnrolment}
            </p>
            <button className="btn btn-success">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClassForAll;
