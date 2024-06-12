import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Rating from 'react-rating'; // Import the rating component
import { useContext, useState } from 'react';
import { AuthContext } from "../../../../Component/AuthContext/AuthProvider";


const MyEnrollClassDetails = () => {
  const classInfo = useLoaderData();
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0);

  const { data: assignments = [] } = useQuery({
    queryKey: ["assignments", classInfo._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assignments/${classInfo._id}`);
      return res.data;
    },
  });

  const handleAssignmentSubmit = async (assignmentId) => {
    const result = await axiosSecure.put(`/assignments/submit/${assignmentId}`);
    if (result.statusText === "OK") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleEvaluationSubmit = async (data) => {
    const evaluation = {
      title:classInfo.title,
      name:user?.displayName,
      image:user?.photoURL,
      description: data.description,
      rating,
      classId: classInfo._id,
    };

    const response = await axiosSecure.post("/evaluations", evaluation);
    if (response.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Evaluation submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      setRating(0);
      document.getElementById("evaluation_modal").close();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <button
        className="btn btn-block bg-green-400 mt-4"
        onClick={() => document.getElementById("evaluation_modal").showModal()}
      >
        Teaching Evaluation Report
      </button>

      <dialog id="evaluation_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Teaching Evaluation Report</h3>
          <form onSubmit={handleSubmit(handleEvaluationSubmit)} method="dialog">
            <div className="form-control w-full my-6">
              <label className="label-text">Description*</label>
              <textarea
                placeholder="Description"
                {...register("description", { required: true })}
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label-text">Rating*</label>
              <Rating
                initialRating={rating}
                onChange={(rate) => setRating(rate)}
            
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-block bg-red-400">
                Send
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("evaluation_modal").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Assignments</h2>
        <h2 className="text-3xl">Total Assignments: {assignments.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment._id}>
                <td>{index + 1}</td>
                <td>{assignment.title}</td>
                <td>{assignment.description}</td>
                <td>{assignment.deadline}</td>
                <td>
                  <button
                    className="btn bg-primaryColor"
                    onClick={() => handleAssignmentSubmit(assignment._id)}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollClassDetails;
