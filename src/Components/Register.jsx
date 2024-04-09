import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

const Register = () => {

    const { handleRegister } = useContext(AuthContext)
    const [eyes, setEyes] = useState(true);

    const [pass, setPass] = useState('password')
    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo')
        if(!/[A-Z]/.test(password)){
          toast('Please Enter Uppercase');
          return;
        }
        if(!/[a-z]/.test(password)){
          toast('Please Enter Lowercase');
          return;
        }
        if(password.length < 6){
          toast('Pass Must be 6 Char');
          return;
        }
       
        
        handleRegister(email, password)
        .then(result => {
            console.log(result.user.email              )
            updateProfile(auth.currentUser, {
              displayName: name, photoURL: photo
            })
            .then(()=> {
             
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.error(error))
    }

    const handleEye = () => {
        setEyes(!eyes);
        if(eyes){
            setPass('text')
        }
        else{
            setPass('password')
        }
    }

    return (
        <div className="hero py-12  bg-base-200">
        <div className="hero-content flex-col  w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={pass}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <div onClick={handleEye} className=" text-xl absolute right-4 top-12">
                {
                    eyes == true ? <FaRegEye  /> : <FaRegEyeSlash/>
                }
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
           
              <p className="px-8 pb-6">Already have an account?? Please <Link className='underline font-bold text-blue-700' to='/login'>Login</Link></p>
          </div>
        </div> 
        <ToastContainer/>
      </div>
    );
};

export default Register;