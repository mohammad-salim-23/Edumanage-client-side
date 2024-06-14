import { useContext, useState } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    data: classes = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleDeleteClass = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/class/${id}`);
          if (res.data) {
            // Update local state by removing the deleted class
            setLocalClasses((prevClasses) =>
              prevClasses.filter((classItem) => classItem._id !== id)
            );
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }
    });
  };

  const totalPages = Math.ceil(classes.length / itemsPerPage);
  const displayedClasses = classes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>My Classes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {displayedClasses.map((classItem) => (
          <div key={classItem._id} className="class-item space-y-5">
            <h3 className="text-2xl font-bold">Title: {classItem.title}</h3>
            <p className="font-medium">Description: {classItem.description}</p>
            <p className="font-semibold">Price: {classItem.price}</p>
            <img
              className="h-96 w-96"
              src={classItem.image}
              alt={classItem.title}
            />
            <p className="font-semibold">Status: {classItem.status}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link to={`/dashboard/update/${classItem._id}`}>
                <button className="btn btn-success">Update</button>
              </Link>
              <button
                onClick={() => handleDeleteClass(classItem._id)}
                className="btn btn-warning"
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => navigate(`/dashboard/my-class/${classItem._id}`)}
              >
                See Details
              </button>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Pagination controls */}
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

export default MyClass;
