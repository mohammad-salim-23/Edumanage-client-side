import { useContext, useState } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
  const { user } = useContext(AuthContext);
 
  const axiosSecure = useAxiosSecure();

  const { data: classes=[], isLoading, isError, error } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      console.log("API Response:", res); 
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Check if classes is an array and log it
  console.log("Classes Data:", classes);

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

  if (!Array.isArray(classes)) {
    return <span>Data format error: Expected an array.</span>;
  }

  return (
    <div>
      <h2>My Classes</h2>
      <div className="classes-list grid grid-cols-1 lg:grid-cols-2 gap-7">
        {classes.map((classItem) => (
          <div key={classItem._id} className="class-item space-y-5">
            <h3 className="text-2xl font-bold">Title:{classItem.title}</h3>
            <p className="font-medium">Description:{classItem.description}</p>
            <p className="font-semibold">Price: ${classItem.price}</p>
            <img className="h-96 w-96" src={classItem.image} alt={classItem.title} />
            <div className="divider"></div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default MyClass;
