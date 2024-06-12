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

  console.log(classesWithFeedback);

  return (
    <div>
      {classesWithFeedback.map((feedback, index) => (
        <div key={index}>
          <h3>{feedback.className}</h3>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
