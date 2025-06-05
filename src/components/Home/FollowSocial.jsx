import React from "react";

const FollowSocial = () => {
  return (
    <section className="bg-base-100  py-16 lg:px-20 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left side heading */}
        <div className="lg:pr-6">
          <h2 className="text-4xl font-baskerville mb-6">
            Follow Our Social <br /> Platform
          </h2>
        </div>

        {/* Right side image grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Top row */}
          <div className="bg-base-200 h-48 rounded-box flex items-center justify-center">
            <img className="object-cover z-10 object-center" src="./follow1.webp" />
          </div>

          <div className="bg-base-200 h-48 rounded-box flex items-center justify-center">
            <img className="object-cover transition-transform hover:scale-120 duration-1000 object-center" src="./follow2.jpg" />{" "}
          </div>

          {/* Bottom row */}
          <div className="bg-base-200 h-48 rounded-box flex items-center justify-center">
            <img className="object-cover transition-transform hover:scale-120 hover:z-20 duration-1000 object-center" src="./follow3.jpg" />
          </div>
          <div className="bg-base-200 h-48 rounded-box flex items-center justify-center">
            <img className="object-cover object-center" src="./follow4.jpg" />
          </div>

          {/* Rotated social handle */}
          <div className="absolute z-30 -left-16 top-1/2 -translate-y-1/2 rotate-[-45deg] text-2xl font-baskerville text-base-content/70">
            @BiteFlow
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowSocial;
