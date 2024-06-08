import { useState } from "react";

import useAxiosPublic from "../hooks/useAxiosPublic";


const Review = () => {
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
     const axiosPublic = useAxiosPublic();
     const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const feedbackData = {
            feedback,name,image,title
        };
        const res = await axiosPublic.post('/feedback',feedbackData);
        setSuccess(true);
      setFeedback('');
      setName('');
      setImage('');
      setTitle('');
     }
    return (
        <div>
              <div className="feedback-form">
      <h2 className="text-2xl font-bold mb-4">Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Feedback</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Class Title</label>
          <input
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          type="submit"
          disabled={loading}
        >
          Submit Feedback
        </button>
        {loading && <p className="text-blue-500 mt-2">Submitting...</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">Feedback submitted successfully</p>}
      </form>
    </div> 
        </div>
    );
};

export default Review;