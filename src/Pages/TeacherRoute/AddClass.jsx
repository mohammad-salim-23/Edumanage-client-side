
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';




const FeedbackForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
 
 

  const onSubmit = async (data) => {
    const feedbackData = {
      feedback: data.feedback,
      name: data.name,
      image: data.image,
      title: data.title,
    };

    try {
      const response = await axiosPublic.post('/feedback', feedbackData);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Feedback submitted successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      
      
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label-text">Feedback*</label>
          <textarea
            placeholder="Your feedback"
            {...register('feedback', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Name*</label>
          <input
            type="text"
            placeholder="Your name"
            {...register('name', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Image URL*</label>
          <input
            type="text"
            placeholder="Image URL"
            {...register('image', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Class Title*</label>
          <input
            type="text"
            placeholder="Class title"
            {...register('title', { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-block bg-primaryColor">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
