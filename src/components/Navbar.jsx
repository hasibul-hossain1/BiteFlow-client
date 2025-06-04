import React from "react";

function Navbar() {
  const navigators = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Foods</a>
      </li>
      <li>
        <a>Gallery</a>
      </li>
      <li className="block sm:hidden">
        <a>Login</a>
      </li>
      <li className="block sm:hidden">
        <a>Sign Up</a>
      </li>
    </>
  );
  return (
    <header className="navbar bg-base-100 md:px-6 shadow-sm">
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
        <ul className="menu menu-horizontal px-1">
            {navigators}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden sm:inline-block space-x-2 ">
        <a className="btn border-primary hover:btn-primary">Login</a>
        <span>or</span>
        <button className="text-primary cursor-pointer">sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
