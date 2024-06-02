import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.  VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key }`

const Teach = () => {
    const {register,handleSubmit,reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data)=>{
        console.log(data);
         // image upload to imgbb and then get an url
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data',
      }
    });
    if(res.data?.success){
       // now send the menu item data to the server with the imageURL
       const newTeacher ={
        name:data.name,
        email:data.email,
        category :data.category,
        experience:data.experience,
        title:data.title,
        status: 'pending', 
        image:res.data.data.display_url,
       } 
       
       const teacher = await axiosSecure.post('/addTeacher',newTeacher);
       console.log(teacher.data);
       if(teacher.data.insertedId){
        // show success popup
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
       }
    }
    }
        
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          {...register("name", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          {...register("image", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value="user@example.com" // Replace with dynamic user email
          readOnly
          {...register("email")}
        />
      </div>

      <div>
        <label htmlFor="experience">Experience:</label>
        <select id="experience" {...register("experience", { required: true })}>
          <option value="beginner">Beginner</option>
          <option value="mid-level">Mid-level</option>
          <option value="experienced">Experienced</option>
        </select>
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          {...register("title", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" {...register("category", { required: true })}>
          <option value="web-development">Web Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="data-science">Data Science</option>
          <option value="graphic-design">Graphic Design</option>
          <option value="software-engineering">Software Engineering</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form> 
        </div>
    );
};

export default Teach;