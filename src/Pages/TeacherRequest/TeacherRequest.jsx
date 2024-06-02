import { Link } from "react-router-dom";
import "../../Component/All.css"
{/* <img className="h-96" src="https://img.freepik.com/free-photo/medium-shot-senior-man-education-concept_23-2151075102.jpg?t=st=1717339958~exp=1717343558~hmac=dda376d4257cb857cebd007dcc12024c2cc05c91b0d017fb7cc5ea837471bc39&w=360" alt="" /> */}
const TeacherRequest = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://img.freepik.com/free-photo/medium-shot-senior-man-education-concept_23-2151075102.jpg?t=st=1717339958~exp=1717343558~hmac=dda376d4257cb857cebd007dcc12024c2cc05c91b0d017fb7cc5ea837471bc39&w=360" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Become an instructor</h1>
      <p className="py-6">We provide the tools and skills to teach what you love.</p>
     <Link to="/teach"> <button className="btn bg-primaryColor">Start teaching today</button></Link>
    </div>
  </div>
</div>
    );
};

export default TeacherRequest;