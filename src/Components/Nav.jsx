import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const Nav = () => {
  const { user } = useContext(AuthContext)
    const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/login'>Login</NavLink></li>
     <li><NavLink to='/register'>Register</NavLink></li>
     {
      user && <li><NavLink to='/user'>User</NavLink></li>
     }
    </>
  return (
    <nav className="navbar bg-base-100 mb-8">
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
        <ul className="menu menu-horizontal px-1">
          
         {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
       <NavLink to='/login'>Login</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
