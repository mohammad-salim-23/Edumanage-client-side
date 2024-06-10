import {  useNavigate, useLoaderData } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Component/AuthContext/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';

const Update = () => {
  const classInfo = useLoaderData();
  console.log(classInfo);
  const { register, handleSubmit, reset, setValue } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch class data by ID and set it to the form
    const fetchClassData = async () => {
      try {
        const response = await axiosSecure.get(`/class/${classInfo._id}`);
        const classData = response.data;
        setValue('title', classData.title);
        setValue('price', classData.price);
        setValue('description', classData.description);
        setValue('experience', classData.experience);
        setValue('category', classData.category);
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };

    fetchClassData();
  }, [classInfo._id,setValue, axiosSecure]);

  const onSubmit = async (data) => {
    const updateClass = {
      title: data.title,
      price: data.price,
      description: data.description,
      experience: data.experience,
      category: data.category,
    };

    try {
      const response = await axiosSecure.put(`/class/${classInfo._id}`, updateClass);
      console.log(response);
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Class Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        navigate('/dashboard/myClass');
      }
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-medium text-center'>Update Class Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label-text">Title*</label>
          <input
            type="text"
            placeholder="Title"
            {...register('title', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Name*</label>
          <input
            type="text"
            value={user?.displayName || ''}
            readOnly
            {...register('name', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Email*</label>
          <input
            type="email"
            value={user?.email || ''}
            readOnly
            {...register('email', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Price*</label>
          <input
            type="text"
            placeholder="Price"
            {...register('price', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Experience*</span>
          </div>
          <select
            {...register('experience', { required: true })}
            className="select select-bordered w-full"
          >
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-level</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        <div className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Category*</span>
          </div>
          <select
            {...register('category', { required: true })}
            className="select select-bordered w-full"
          >
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="data-science">Data Science</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="software-engineering">Software Engineering</option>
          </select>
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Description*</label>
          <textarea
            placeholder="Description"
            {...register('description', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-block bg-primaryColor">
          Update Class
        </button>
      </form>
    </div>
  );
};

export default Update;
