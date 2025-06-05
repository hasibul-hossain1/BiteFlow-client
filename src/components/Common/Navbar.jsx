import React from "react";
import ThemeSwitcher from "../Common/ThemeSwitcher";
import { Link } from "react-router";
import { useApp } from "../../hooks/AppContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOUtUser } from "../../../firebase/firebasePanel";

function Navbar() {
  const { state } = useApp();
  console.log(state.user.data);
  const navigators = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allfoods">All Foods</Link>
      </li>
      <li>
        <a>Gallery</a>
      </li>
      <li className="block sm:hidden">
        <Link to="/login">Login</Link>
      </li>
      <li className="block sm:hidden">
        <Link to='/signup'>Sign Up</Link>
      </li>
    </>
  );
  const handleLogout=()=>{
    signOUtUser()
  }
  return (
    <div className="mb-16">
      <header className="navbar bg-base-100/50 z-50 backdrop-blur-sm fixed top-0 md:px-6 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navigators}
            </ul>
          </div>
          <h2 className="font-bold p-2 text-xl">BiteFlow.com</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigators}</ul>
        </div>
        <div className="navbar-end">
          {state?.user?.data ? (<div className="flex gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
            <button onClick={handleLogout} className="flex items-center hover:btn-primary btn border-primary">Logout<RiLogoutCircleRLine /></button>
          </div>
          ) : (
            <div className="hidden sm:inline-block space-x-2 ">
              <Link
                to="/login"
                className="btn border-primary hover:btn-primary"
              >
                Login
              </Link>
              <span>or</span>
              <Link to='/signup' className="text-primary btn btn-ghost">sign up</Link>
            </div>
          )}
        </div>
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default Navbar;
