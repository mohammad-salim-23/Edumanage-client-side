
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

    // Get top 6 classes
    const topClasses = classes.slice(0, 6);

    return (
        <div>
            <h2 className="mt-3 text-center font-bold text-2xl"> <span className="text-green-600">Popular</span> Classes</h2>
            <div className="md:carousel rounded-box">
                {topClasses.map((classItem) => (
                    <div key={classItem._id} className="carousel-item p-4">
                        <div className=" bg-white rounded-lg shadow-lg p-4 text-center">
                            <img className="h-48 w-full object-cover mb-4 rounded-lg" src={classItem.image} alt={classItem.title} />
                            <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                            <p className="text-gray-700 mb-2">{classItem.description}</p>
                            <p className="text-gray-500 mb-2">Email: {classItem.email}</p>
                            <p className="text-green-600 font-bold">Price: {classItem.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClass;
