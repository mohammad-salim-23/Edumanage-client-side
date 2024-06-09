import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


import Swal from 'sweetalert2';
import { AuthContext } from '../../../Component/AuthContext/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';

const Update = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const res = await axiosSecure.get(`/class/${id}`);
        const classData = res.data;
        setValue('title', classData.title);
        setValue('price', classData.price);
        setValue('experience', classData.experience);
        setValue('category', classData.category);
        setValue('description', classData.description);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch class data:', error);
      }
    };

    fetchClass();
  }, [id, setValue, axiosSecure]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const res = await axiosSecure.put(`/class/${id}`, formData);
      if (res.data) {
        Swal.fire('Success!', 'Class updated successfully', 'success');
        navigate('/dashboard/myClass');
      }
    } catch (error) {
      Swal.fire('Error!', 'Failed to update class', 'error');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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

        <div className="form-control w-full my-6">
          <label className="label-text">Image*</label>
          <input
            type="file"
            {...register('image')}
            className="file-input w-full max-w-xs"
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
