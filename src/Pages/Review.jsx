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

  

  return (
  <div>
    <h2 className="mt-3 text-center font-bold text-2xl"> Student's <span className="text-green-600">Feedback</span></h2>
      <div className="lg:carousel rounded-box grid grid-cols-2 md:grid-cols-3">
      {classesWithFeedback.map((feedback, index) => (
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
  </div>
  );
};

export default Review;
