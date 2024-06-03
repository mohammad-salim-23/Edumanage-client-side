import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddClass = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.displayName) {
      setValue("name", user.displayName);
    }
    if (user?.email) {
      setValue("email", user.email);
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    // Image upload to imgbb
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // Prepare the new class data
      const newClass = {
        title: data.title,
        name: user.displayName,
        email: user.email,
        price: data.price,
        description: data.description,
        image: res.data.data.display_url,
        status: "pending"
      };

      // Store the class data in MongoDB
      const response = await axiosSecure.post("/classes", newClass);
      if (response.data.insertedId) {
        // Show success popup and redirect
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Class "${data.title}" has been added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myClass");
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label-text">Title*</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Name*</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            {...register("name", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Email*</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Price*</label>
          <input
            type="text"
            placeholder="Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-6">
          <label className="label-text">enrollment*</label>
          <input
            type="number"
            value={0}
            placeholder="enrollment"
            readOnly
            {...register("enrollment", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Description*</label>
          <textarea
            placeholder="Description"
            {...register("description", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full my-6">
          <label className="label-text">Image*</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs"
          />
        </div>

        <button type="submit" className="btn btn-block bg-primaryColor">
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
