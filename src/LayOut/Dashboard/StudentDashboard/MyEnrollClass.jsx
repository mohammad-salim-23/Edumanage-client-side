import { useContext } from "react";
import { AuthContext } from "../../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyEnrollClass = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(classes);

  return (
    <div>
      <h2 className="text-4xl text-center m-2">My Enrollment Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {classes.map((classItem) => (
          <div key={classItem._id} className="card md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={classItem.image} alt={classItem.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classItem.title}</h2>
              <p>{classItem.description}</p>
              <p>
                <strong>Instructor:</strong> {classItem.name}
              </p>
              <p>
                <strong>Price:</strong> {classItem.price}
              </p>
              <p>
                <strong>Enrollment:</strong> {classItem.enrollment}
              </p>
              <div className="">
                <Link to={`/dashboard/myenroll-class/${classItem._id}`}>
                <button className="btn btn-block bg-primaryColor">Continue</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollClass;
