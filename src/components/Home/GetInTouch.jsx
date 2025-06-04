import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-base-300 text-primary-content py-12 px-4 mt-40 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl font-baskerville mb-4">Get In Touch</h2>
          <p className="text-sm text-accent-content ">
            For more information about our company or if there are any other questions,
            please contact us.
          </p>
        </div>

        {/* Right Email Form */}
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter Your Email Address..."
            className="input input-bordered w-full text-base-content bg-base-100"
            required
          />
          <button className="btn bg-base-100 text-primary font-semibold hover:bg-base-200 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
