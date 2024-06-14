import { useQuery } from "@tanstack/react-query";


import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const AllClassForAll = () => {
    const axiosPublic = useAxiosPublic();
    const { data: classes = [], refetch } = useQuery({
      queryKey: ["classes"],
      queryFn: async () => {
        const res = await axiosPublic.get("/classes");
        return res.data;
      },
    });
    
//  pagination state
const [currentPage,setCurrentPage] = useState(1);
const itemsPerPage = 10;
 
 const approvedClass = classes.filter((classItem)=>classItem.status==='approved');
 const totalPages = Math.ceil(approvedClass.length/itemsPerPage);
 const displayedClasses = approvedClass.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);

//  Handle page change
const handlePageChange = (newPage)=>{
  setCurrentPage(newPage);
};

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedClasses.map((classItem) => (
          <div key={classItem.id} className="card w-96 bg-base-100 shadow-xl">
            <img src={classItem.image} alt={classItem.title} className="h-96" />
            <h2 className="card-title">{classItem.title}</h2>
            <p className="font-semibold">Posted by: {classItem.name}</p>
            <p className="font-medium">Price: ${classItem.price}</p>
            <p className="">{classItem.description}</p>
            <p className="class-enrollment">
              Total Enrollment: {classItem.enrollment}
            </p>
            <Link to={`/classDetails/${classItem._id}`}>
              <button className="btn btn-success btn-outline btn-block">Enroll</button>
            </Link>
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

export default AllClassForAll;
