import React from "react";
import emailJs from "@emailjs/browser";
import Swal from "sweetalert2";

const GetInTouch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailJs.sendForm(
      import.meta.env.VITE_service_id,
      import.meta.env.VITE_template_id,
      form,
      import.meta.env.VITE_public_key
    ).then(() => {
      Swal.fire({
        icon:"success",
        text:"email added, check your inbox!"
      })
    }).catch(() => {
      Swal.fire({
        icon:"error",
        text:"Failed to add email."
      })
    })
    form.reset()
  };
  return (
    <section className="bg-base-300 text-primary-content py-12 px-4 mt-40 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl font-baskerville mb-4">Get In Touch</h2>
          <p className="text-sm text-accent-content ">
            For more information about our company or if there are any other
            questions, please contact us.
          </p>
        </div>

        {/* Right Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address..."
            className="input input-bordered w-full text-base-content bg-base-100"
            required
          />
          <button
            type="submit"
            className="btn bg-base-100 text-primary font-semibold hover:bg-base-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
