import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Review = () => {
  const axiosPublic = useAxiosPublic();
  
  const { data: classesWithFeedback = [] } = useQuery({
    queryKey: ['classesWithFeedback'],
    queryFn: async () => {
      const res = await axiosPublic.get("/with-feedback");
      return res.data;
    }
  });
  const [currentPage,setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(classesWithFeedback.length/itemsPerPage);
  const startIndex = currentPage*itemsPerPage;
  const endIndex = startIndex+itemsPerPage;
  const displayedClasses = classesWithFeedback.slice(startIndex,endIndex);

 const handleNext = () =>{
  setCurrentPage((prevPage)=>(prevPage+1)%totalPages);
 }

 const handlePrev=()=>{
  setCurrentPage((prevPage)=>(prevPage-1+totalPages)%totalPages)
 }
  

  return (
  <div>
    <h2 className="mt-3 text-center font-bold text-2xl"> Student's <span className="text-green-600">Feedback</span></h2>
      <div className="lg:carousel rounded-box grid grid-cols-2 md:grid-cols-3">
      {displayedClasses.map((feedback, index) => (
        <div className="carousel-item p-4" key={index}>
          <div>
          <img className="h-48 w-full object-cover rounded-lg" src={feedback.image} alt="Shoes" />
          <h3 className="text-xl font-semibold mb-2">class title:{feedback.title}</h3>
          <p>{feedback.description}</p>
          <h3 className="font-medium">posted-by:{feedback.name}</h3>
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

export default Review;
