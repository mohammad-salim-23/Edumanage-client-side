import  { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Teach = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext); // get the authenticated user info

  useEffect(() => {
    if (user?.email) {
      setValue("email", user.email);
    }
    // Set the default value for the status field to 'pending'
    setValue("status", "pending");
  }, [user, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the server with the imageURL
      const newTeacher = {
        name: data.name,
        email: data.email,
        category: data.category,
        experience: data.experience,
        title: data.title,
       
        status: "pending",
        image: res.data.data.display_url,
      };

      const teacher = await axiosSecure.post("/reqTeacher", newTeacher);
      console.log(teacher.data);
      if (teacher.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
     
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Name*</span>
            </div>
            <input
              type="text"
              placeholder="Name"
             
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Image*</span>
            </div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Email*</span>
            </div>
            <input
              type="email"
              value={user?.email}
              readOnly
              {...register("email", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Experience*</span>
            </div>
            <select
              {...register("experience", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="beginner">Beginner</option>
              <option value="mid-level">Mid-level</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>

          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Title*</span>
            </div>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="web-development">Web Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="software-engineering">Software Engineering</option>
            </select>
          </div>

          <button type="submit" className="btn btn-block bg-primaryColor">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teach;
