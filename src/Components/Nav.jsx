import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Nav.css'
import 'animate.css';

const Nav = () => {
  const { user, logOut, name, photo} = useContext(AuthContext);

  // const [name, setName] = useState(null);
  

 

  const navLinks = (
    < >
      <li   className="">
        <NavLink className={'btn btn-ghost lg:text-lg text-black lg:text-white font-bold'}  to="/">Home</NavLink>
      </li>
      {/* <li >
        <NavLink className={'btn btn-ghost text-lg md:text-white font-bold'} to="/login">Login</NavLink>
      </li> */}
      <li className="">
        <NavLink className={'btn btn-ghost lg:text-lg text-black lg:text-white font-bold'} to="/register">Register</NavLink>
      </li>
      <li className="">
        <NavLink className={' btn btn-ghost lg:text-lg text-black lg:text-white font-bold'} to="/update">Update Profile</NavLink>
      </li>
      <li className="">
        <NavLink className={' btn btn-ghost lg:text-lg text-black lg:text-white font-bold'} to="/licence">Licence</NavLink>
      </li>
    
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        
        // toast("Logged Out !!!");
        alert("Logged Out!!!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <nav className="navbar animate__animated animate__fadeInUp  bg-[#393D45] px-4 py-5  text-white mb-24 md:mb-16 lg:mb-12">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-[10] menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">

          
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:bg-gray-500">Comfort Estates</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            
            <div className="tooltip w-10 rounded-full btn btn-ghost btn-circle avatar" data-tip={name}>
           <img
           className="rounded-full"
                alt="Tailwind CSS Navbar component"
                  src={photo}
                />
            </div>
            <button onClick={handleLogOut} className="ml-3 btn btn-primary text-lg font-bold">
              Log Out
            </button>
          </>
        ) : (
          <Link className={"btn btn-primary text-lg font-bold"} to="/login">
            Login
          </Link>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </nav>
  );
};

export default Nav;
