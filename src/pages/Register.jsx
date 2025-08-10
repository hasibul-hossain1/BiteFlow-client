import { Link, Navigate, useLocation } from "react-router";
import { createUser, updateProfileUser } from "../../firebase/firebasePanel";
import Swal from "sweetalert2";
import { useSelector } from "../hooks/AppContext";
import Lottie from "lottie-react";
import foodRegister from "../assets/lotties/food-register.json";

function SignUpPage() {
  const location = useLocation();
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
    <section className="bg-base-200">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="min-h-[60vh] grid md:grid-cols-2 items-center gap-12">
          {/* Left: Animation */}
          <div className="flex justify-center shrink-0">
            <Lottie animationData={foodRegister} loop autoplay className="size-64 md:size-80" />
          </div>

          {/* Right: Form Card */}
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-2xl border border-base-300 bg-base-100/90 shadow-lg">
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
                <form onSubmit={handleRegister} className="space-y-3">
                  <div>
                    <label className="label text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="label text-base">Photo URL</label>
                    <input
                      type="text"
                      name="photoUrl"
                      className="input input-bordered w-full border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                      placeholder="Photo URL"
                      required
                    />
                  </div>

                  <div>
                    <label className="label text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered w-full border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <label className="label text-base">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input input-bordered w-full border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button className="btn btn-primary w-full mt-1">Register</button>
                </form>

                <p className="text-sm text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="hover:text-blue-500">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
