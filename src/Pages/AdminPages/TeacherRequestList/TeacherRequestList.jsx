import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { FaCheck, FaTimes } from "react-icons/fa";

const TeacherRequestList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: teachers = [], refetch } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/teachers');
      return res.data;
    }
  });

  const handleApprove = async (teacher) => {
    try {
      await axiosSecure.patch(`/users/teacher/${teacher.email}`);
      refetch();
    } catch (error) {
      console.error('Failed to approve teacher', error);
    }
  };

  const handleReject = async (teacher) => {
    try {
      await axiosSecure.delete(`/teachers/${teacher._id}`);
      refetch();
    } catch (error) {
      console.error('Failed to reject teacher', error);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Teacher Requests</h2>
        <h2 className="text-3xl">Total Requests: {teachers.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Experience</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher._id}>
                <td>{index + 1}</td>
                <td>{teacher.name}</td>
                <td><img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-full" /></td>
                <td>{teacher.experience}</td>
                <td>{teacher.title}</td>
                <td>{teacher.category}</td>
                <td>{teacher.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(teacher)}
                    className="btn btn-success"
                    disabled={teacher.status !== 'pending'}
                  >
                    <FaCheck />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleReject(teacher)}
                    className="btn btn-danger"
                    disabled={teacher.status !== 'pending'}
                  >
                    <FaTimes />
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

export default TeacherRequestList;
