import {  Link, useLoaderData, useNavigate } from "react-router-dom";



const ClassDetails = () => {
   const classItem = useLoaderData();
    console.log(classItem);

    
   
 
    return (
       <div className="flex items-center justify-center min-h-screen">
         <div className=" p-4  ">
            <h1 className="text-2xl font-bold mb-4 text-center">Class Details</h1>
            <div className="card w-96 bg-base-100 shadow-xl space-y-4">
                <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                    <h2 className="card-title text-xl font-bold">{classItem.title}</h2>
                    <p className="font-semibold">Posted by: {classItem.name}</p>
                  
                    <p className="font-medium">Price: ${classItem.price}</p>
                    <p className="">{classItem.description}</p>
                    <p className="class-enrolment">Total Enrolment: {classItem?.enrollment}</p>
                    <div className="">
                       
                    <Link to={`/pay/${classItem._id}`}>
                    <button  className="btn btn-success btn-block btn-outline" >Pay</button>
                    </Link>
                    
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ClassDetails;