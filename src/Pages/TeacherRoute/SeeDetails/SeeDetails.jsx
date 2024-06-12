import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const SeeDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const classInfo = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch assignments for the class
  const { data: assignments = [] } = useQuery({
    queryKey: ["assignments", classInfo._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assignments/${classInfo._id}`);
      return res.data;
    },
  });

  // Mutation for submitting an assignment
  const submitAssignmentMutation = useMutation({
    mutationFn: async (assignmentId) => {
      await axiosSecure.put(`/assignments/submit/${assignmentId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["assignments", classInfo._id]);
    },
  });

  // Handle assignment form submission
  const onSubmit = async (data) => {
    const assignment = {
      title: data.title,
      deadline: data.deadline,
      description: data.description,
      submission: 0,
      classId: classInfo._id, // Link the assignment to the specific class
    };

    const response = await axiosSecure.post("/assignments", assignment);

    if (response.data.insertedId) {
      reset(); // Reset form fields
      document.getElementById("my_modal_5").close(); // Close the modal
      queryClient.invalidateQueries(["assignments", classInfo._id]);
    } else {
      console.error("Failed to create assignment");
    }
  };

  // Handle assignment submission
  const handleSubmitAssignment = (assignmentId) => {
    submitAssignmentMutation.mutate(assignmentId);
  };

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold text-center">Class Progress</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-medium">
          <div className="card-body">
            <h2>Total Enrollment: {classInfo.enrollment}</h2>
          </div>
          <div className="card-body">
            <h2>Total Assignments: {assignments.length}</h2>
          </div>
          <div className="card-body">
            <h2>
              Per Day Assignment Submissions:{" "}
              {assignments.reduce(
                (total, assignment) => total + (assignment.submission || 0),
                0
              )}
            </h2>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Create Assignment
        </button>
      </div>

      {/* Modal for creating assignment */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Assignment</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="form-control w-full my-6">
              <label className="label-text">Assignment Title*</label>
              <input
                type="text"
                placeholder="Assignment Title"
                {...register("title", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label-text">Assignment Deadline*</label>
              <input
                type="date"
                placeholder="Assignment Deadline"
                {...register("deadline", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label-text">Assignment Description*</label>
              <textarea
                placeholder="Assignment Description"
                {...register("description", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-block bg-primaryColor">
                Add Assignment
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>

    
    </div>
  );
};

export default SeeDetails;
