import { useContext, useState } from "react";
import { AuthContext } from "../../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyEnrollClass = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: classes = [], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const totalPages = Math.ceil(classes.length / itemsPerPage);
  const displayedClasses = classes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-4xl text-center m-2">My Enrollment Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedClasses.map((classItem) => (
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
              <div>
                <Link to={`/dashboard/myenroll-class/${classItem._id}`}>
                  <button className="btn btn-block bg-primaryColor">Continue</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-outline mx-1"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`btn mx-1 ${currentPage === index + 1 ? 'btn-active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-outline mx-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyEnrollClass;
