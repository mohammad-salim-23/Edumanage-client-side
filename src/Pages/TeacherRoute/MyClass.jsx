// import { useContext } from "react";
// import { AuthContext } from "../../Component/AuthContext/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


// const MyClass = () => {
//     const {user} = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();
//     const {data:classes=[],isLoading} = useQuery({
//         queryKey:['classes',user?.email],
//         queryFn:async()=>{
//             const res = await axiosSecure.get(`/classes/${user?.email}`);
//             return res.data;
//         },
        
//             enabled:!!user?.email,
        
//     });
//     console.log(classes);
//     if(isLoading){
//         <>
//         <span className="loading loading-bars loading-xs"></span>
// <span className="loading loading-bars loading-sm"></span>
// <span className="loading loading-bars loading-md"></span>
// <span className="loading loading-bars loading-lg"></span>
//         </>
//     }
//     return (
//         <div>
//            <div>
//       <h2>My Classes</h2>
//       <div className="classes-list">
//         {classes && classes?.map((classItem) => (
//           <div key={classItem._id} className="class-item">
//             <h3>{classItem.title}</h3>
//             <p>{classItem.description}</p>
//             <img src={classItem.image} alt={classItem.title} />
//             <p>Price: ${classItem.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>  
//         </div>
//     );
// };

// export default MyClass;
const MyClass = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: classes, isLoading } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    });

    // Check if classes is an array and if the first element is an object
    const classess = Array.isArray(classes) && typeof classes[0] === 'object' ? 
                        classes.map(classData => ({
                            _id: classData[0],
                            title: classData[1],
                            name: classData[2],
                            email: classData[3],
                            price: classData[4],
                            description: classData[5],
                            image: classData[6],
                            status: classData[7]
                        })) 
                        : [];

    console.log(classess);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div>
            <h2>My Classes</h2>
            <div className="classes-list">
                {classess.map((classItem) => (
                    <div key={classItem._id} className="class-item">
                        <h3>{classItem.title}</h3>
                        <p>{classItem.description}</p>
                        <img src={classItem.image} alt={classItem.title} />
                        <p>Price: ${classItem.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClass;


