import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useState } from "react";

const AllClass = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });
  const totalPages = Math.ceil(classes.length/itemsPerPage);
  const displayedClasses = classes.slice((currentPage-1)*itemsPerPage,
currentPage*itemsPerPage);

const handlePageChange=(newPage)=>{
  setCurrentPage(newPage);
}

  const handleApprove = async (newClass) => {
    try {
      await axiosSecure.patch(`/classes/${newClass._id}`);
      refetch();
    } catch (error) {
      console.error("Failed to approve class", error);
    }
  };

  const handleReject = async (newClass) => {
    try {
      await axiosSecure.delete(`/classes/${newClass._id}`);
      refetch();
    } catch (error) {
      console.error("Failed to reject class", error);
    }
  };

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center my-4">
        <h2 className="text-3xl mb-4 md:mb-0">All Class Requests</h2>
        <h2 className="text-3xl">Total Requests: {classes.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full   mb-8">
          <thead>
            <tr className="mb-8">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Experience</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {displayedClasses.map((newClass, index) => (
              <tr key={newClass._id}>
                <td>{index + 1}</td>
                <td>{newClass.name}</td>
                <td>
                  <img
                    src={newClass.image}
                    alt={newClass.name}
                    className="sm:w-4 sm:h-4 lg:w-16 lg:h-16 rounded-full object-cover"
                  />
                </td>
                <td>{newClass.experience}</td>
                <td>{newClass.title}</td>
                <td>{newClass.category}</td>
                <td>{newClass.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(newClass)}
                    className="btn btn-success"
                    disabled={newClass.status !== "pending"}
                  >
                    <FaCheck />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleReject(newClass)}
                    className="btn btn-danger"
                    disabled={newClass.status !== "pending"}
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button 
        onClick={()=>handlePageChange(currentPage-1)}
        disabled={currentPage===1}
        className="btn btn-outline mx-1"
        >
          Previous
          </button>
          {[...Array(totalPages)].map((_,index)=>(
           <button 
           key={index}
           onClick={()=>handlePageChange(index+1)}
           className={`btn mx-1 ${currentPage===index+1?"btn-active":""}`}
           >
           {index+1}
           </button>
        
          )
          )}
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

export default AllClass;
