import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Component/AuthContext/AuthProvider';
import SocialComponent from '../../Component/SocialComponent';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful.",
                    showClass: "animate__animated animate__fadeInUp animate__faster",
                    hideClass: "animate__animated animate__fadeOutDown animate__faster"
                });

                navigate('/');
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    return (
        <div className="min-h-screen bg-base-200 md:flex md:justify-center items-center">
            <Helmet>
                <title>3 Idiots | LogIn</title>
            </Helmet>
            <div className="card md:w-1/2 p-6 bg-base-100">
                <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the above captcha" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input disabled={disabled} className="btn bg-primaryColor w-full" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center mt-4'><small>New here? </small> <Link className='font-bold' to="/signUp">Create a new account</Link></p>
                <div className='text-center'>
                <SocialComponent />
                </div>
            </div>
            <div className="flex-1">
                <img className='w-full h-auto' src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/20732/SM1072546.jpg" alt="" />
            </div>
        </div>
    );
};

export default SignIn;
