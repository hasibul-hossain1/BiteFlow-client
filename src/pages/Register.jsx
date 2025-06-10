import { Link, Navigate } from "react-router";
import { createUser, updateProfileUser } from "../../firebase/firebasePanel";
import Swal from "sweetalert2";
import { useSelector } from "../hooks/AppContext";

function SignUpPage() {
  const user = useSelector((state) => state.user);
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (passwordPattern.test(password)) {
      createUser(email, password)
        .then(() => {
          updateProfileUser({ displayName, photoURL });
          Swal.fire({
            icon: "success",
            title: "Register Successfully",
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Use one uppercase, one lowercase, and at least 6 characters for password",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  if (user?.data) return <Navigate to={location.state || "/"} />;

  return (
    <section className="flex mt-32 bg-base-200 justify-center flex-col items-center h-[80vh]">
      <form onSubmit={handleRegister} className="fieldset rounded-box w-xs p-4">
        <legend className="fieldset-legend text-4xl">SignUp</legend>

        <label className="label text-2xl">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Name"
          required
        />

        <label className="label text-2xl">Photo Url</label>
        <input
          type="text"
          name="photoUrl"
          className="input"
          placeholder="Photo Url"
          required
        />

        <label className="label text-2xl">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        <label className="label text-2xl">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          required
        />

        <button className="btn btn-neutral mt-4">Register</button>
        <h4 className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-blue-500">
            Log in
          </Link>
        </h4>
      </form>
    </section>
  );
}

export default SignUpPage;
