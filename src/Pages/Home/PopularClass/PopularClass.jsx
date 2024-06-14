import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../Component/All.css";

const PopularClass = () => {
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });

  // Sort classes based on enrollment
  classes.sort((a, b) => b.enrollment - a.enrollment);

  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(classes.length / itemsPerPage);

  // Get classes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedClasses = classes.slice(startIndex, endIndex);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div>
      <h2 className="mt-3 text-center font-bold text-2xl">
        <span className="text-green-600">Popular</span> Classes
      </h2>
      <div className="lg:carousel rounded-box grid grid-cols-2 md:grid-cols-3">
        {displayedClasses.map((classItem) => (
          <div key={classItem._id} className="carousel-item p-4">
            <div className=" bg-white rounded-lg shadow-lg p-4 text-center">
              <img
                className="h-48 w-full object-cover mb-4 rounded-lg"
                src={classItem.image}
                alt={classItem.title}
              />
              <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
              <p className="text-gray-700 mb-2">{classItem.description}</p>
              <p className="text-gray-500 mb-2">Email: {classItem.email}</p>
              <p className="text-green-600 font-bold">
                Price: {classItem.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrev}
          className="btn btn-outline mx-1"
          disabled={currentPage === 0}
        >
         Previous
        </button>
        <button
          onClick={handleNext}
          className="btn btn-outline mx-1"
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularClass;
