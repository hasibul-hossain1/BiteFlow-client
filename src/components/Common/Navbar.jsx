import React from "react";
import ThemeSwitcher from "../Common/ThemeSwitcher";
import { Link } from "react-router";
import { useApp } from "../../hooks/AppContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOUtUser } from "../../../firebase/firebasePanel";
import Swal from "sweetalert2";

function Navbar() {
  const { state } = useApp();
  const handleLogout = () => {
    signOUtUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.message || "Something went wrong!",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
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
      {state.user?.data ? (
        <li className="block sm:hidden">
          <button onClick={handleLogout} to="/signup">
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="block sm:hidden">
            <Link to="/login">Login</Link>
          </li>
          <li className="block sm:hidden">
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

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
          {state?.user?.data ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost w-14 btn-circle avatar"
                >
                  <div className="w-14 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={state.user?.data?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to='/myfoods'>
                      My Foods
                    </Link>
                  </li>
                  <li>
                    <Link to='/addfood'>Add Foods</Link>
                  </li>
                  <li>
                    <a>My Orders</a>
                  </li>
                </ul>
              </div>
              <button
                onClick={handleLogout}
                className="sm:flex hidden items-center hover:btn-primary btn border-primary"
              >
                Logout
                <RiLogoutCircleRLine />
              </button>
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
              <Link to="/signup" className="text-primary btn btn-ghost">
                sign up
              </Link>
            </div>
          )}
        </div>
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default Navbar;
