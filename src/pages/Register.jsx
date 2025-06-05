import { Link, useLocation, Navigate } from "react-router";
import {
  createUser,
  updateProfileUser,
  useUserContext,
} from "../contexts/FirebaseContext/UserContext";
import toast from "react-hot-toast";

function SignUpPage() {
  const [user, setUser] = useUserContext();
  const location = useLocation();
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
          toast.success('Register Successful')
          Navigate(location.state?location.state:'/')
          updateProfileUser({ displayName, photoURL });
          setUser((prev) => ({
            ...prev,
            userIsLoading: false,
            userIsError: false,
          }));
        })
        .catch((err) => {
          setUser((prev) => ({
            ...prev,
            userIsLoading: false,
            userIsError: true,
            userErrorMessage: err?.message,
          }));
        });
    } else {
      setUser((prev) => ({
        ...prev,
        userIsLoading: false,
        userIsError: true,
        userErrorMessage:
          "Your password is incorrect. Please use a valid password.",
      }));
    }
  };

  if (user.userData) {
    return <Navigate to={location.state || "/"} />;
  }

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
      <p className={user.userIsError ? "text-red-500 text-md font-bold" : ""}>
        {user.userIsError ? user.userErrorMessage : ""}
      </p>
      <p>
        NB: Use one uppercase, one lowercase, and at least 6 characters for
        password
      </p>
    </section>
  );
}

export default SignUpPage;
