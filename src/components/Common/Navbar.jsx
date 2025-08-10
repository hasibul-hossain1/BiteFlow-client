import ThemeSwitcher from "../Common/ThemeSwitcher";
import { Link, NavLink } from "react-router";
import { useSelector } from "../../hooks/AppContext";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOUtUser } from "../../../firebase/firebasePanel";
import Swal from "sweetalert2";
import { api } from "../../lib/api";

function Navbar() {
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        api.post("/logout");

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
      }
    });
  };
  const navigators = (
    <>
      <li>
        <NavLink className={({isActive})=>isActive?"text-primary":''} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?"text-primary":''} to="/allfoods">All Foods</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?"text-primary":''} to="/gallery">Gallery</NavLink>
      </li>


      {user?.data ? (
        <>
          <li>
            <NavLink className={({isActive})=>isActive?"text-primary":''} to="/myfoods">My Foods</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?"text-primary":''} to="/addfood">Add Foods</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive?"text-primary":''} to="/myorders">My Orders</NavLink>
          </li>
          <li className="block sm:hidden">
            <button onClick={handleLogout} to="/signup">
              Logout
            </button>
          </li>
        </>
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
          {user?.data ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div className="btn btn-ghost btn-circle w-14 avatar">
                  <div className="w-14 rounded-full">
                    <img
                      alt="user image"
                      src={
                        user?.data?.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
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
