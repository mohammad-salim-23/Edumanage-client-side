
import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

import { AuthContext } from '../../Component/AuthContext/AuthProvider';
import SocialComponent from '../../Component/SocialComponent';

const SignIn = () => {
   const navigate = useNavigate();
   const location   = useLocation();
   const from = location.state?.from?.pathname || "/";
   console.log("state in the location login page",location.state)
    const [disabled,setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        signIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "User  Login Successful.",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
         if(location===null){
            navigate('/');
         }
         else{
            navigate(from , {replace:true});
         }
        })

    }
    const handleValidateCaptcha=(e)=>{
         const user_captcha_value =  e.target.value;
         if (validateCaptcha(user_captcha_value)) {
              setDisabled(false);
        }
        else{
          setDisabled(true);
        }
    }
    return (
        <div>
            <Helmet>
                <title>3 Idiots | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card md:w-1/2  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email"
           placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name="password"
           placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          
          </label>
          <input 
         onBlur={handleValidateCaptcha}
           type="text" 
          name="captcha"
           placeholder="type the above captcha" className="input input-bordered"  />
        
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn bg-yellow-400" type="submit" value="Login" />
        </div>

      </form>

      
      <p className='flex items-center justify-center mb-2'><small>New here? </small> <Link className='font-bold'  to="/signUp">Create a new account</Link></p>
    
      <SocialComponent></SocialComponent>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;

