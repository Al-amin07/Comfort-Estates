import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = () => {

    const { handleLogin, googleLogin, githubLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Comfort Estate";
  }, [])
  // console.log(location)

    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        
        
        handleLogin(email, password)
        .then((result) => {
          console.log(result.user);
          alert("Successfully Login!!!");
          // toast("Successfully Login!!!");
         return navigate(location?.state ? location.state : '/')
        })
        .catch(error => toast(error.message));

    }
   

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
          console.log(result.user)
          return navigate(location?.state ? location.state : '/')
        }
          )
        .catch(error => console.log(error))
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
          console.log(result.user)
          return navigate(location?.state ? location.state : '/')
        }
          )
        .catch(error => console.log(error))
    }

  return (
    <div className="hero py-12  bg-base-200">
      <div className="hero-content flex-col  w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLoginSubmit} className="card-body w-full">
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
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-lg font-semibold text-center mb-4">-------Sign in With-------</p>
         <div className="px-8 mb-4 space-x-4 flex justify-center gap-5">
         <FaGoogle onClick={handleGoogleLogin} className=" btn btn-circle"/>
         <FaGithub onClick={handleGithubLogin} className=" btn btn-circle"/>
         
         </div>
       
            <p className="px-8 pb-6 text-xl">Dont have any account?? Please <Link className='underline font-bold text-blue-700' to='/register'>Register</Link></p>
        </div>
      </div> 
      <ToastContainer/>
    </div>
  );
};

export default Login;
