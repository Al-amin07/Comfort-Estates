import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Nav = () => {
  const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/login'>Login</NavLink></li>
     <li><NavLink to='/update'>Update Profile</NavLink></li>
     
    </>

    const handleLogOut = () => {
      toast("Logged Out !!!")
      logOut()
      .then(() => {
        
      })
      .catch(error => console.log(error))
    }
  return (
    <nav className="navbar my-8 bg-base-100 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
        {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Comfort Estates</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          
         {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <>
         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
        <button onClick={handleLogOut} className=" ml-3 btn btn-primary">Log Out</button>
        </> : 
         <NavLink className={'btn btn-secondary'} to='/login'>Login</NavLink>
      }
      </div>
      <ToastContainer></ToastContainer>
    </nav>
  );
};

export default Nav;
