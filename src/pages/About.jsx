import React from "react";
import Pattern from "../components/Common/Pattern";
import { Link } from "react-router";

function About() {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            About <span className="text-primary">BiteFlow</span>
          </h1>
          <p className="text-base-content/70">
            We craft delicious meals with quality ingredients, warm service, and
            a dash of innovation. Discover our story and what makes us different.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100 border border-base-300/60 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Our Story</h3>
              <p className="text-base-content/70">
                BiteFlow began with a simple idea: make great food fast without
                sacrificing quality. Today, we serve a community that values
                flavor, freshness, and convenience.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300/60 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Quality Ingredients</h3>
              <p className="text-base-content/70">
                We source seasonal produce and premium staples, partnering with
                local suppliers to keep every plate vibrant and wholesome.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300/60 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Fast & Friendly</h3>
              <p className="text-base-content/70">
                From our kitchen to your table, our team prioritizes speed,
                safety, and a friendly experience every step of the way.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300/60 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Sustainability</h3>
              <p className="text-base-content/70">
                We minimize waste, optimize packaging, and continuously improve
                our footprint to serve people and planet.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300/60 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Community</h3>
              <p className="text-base-content/70">
                We support local causes, collaborate with creators, and celebrate
                the diverse tastes of our neighborhood.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300/60 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Craft & Care</h3>
              <p className="text-base-content/70">
                Each dish is prepared with care by a team that truly loves food—
                you can taste the difference in every bite.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Pattern>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold">Quick Facts</h3>
                  <p className="opacity-90">
                    5000+ happy customers, 150+ menu items, and same‑day
                    delivery in most areas.
                  </p>
                </div>
                <div className="md:col-span-2 grid grid-cols-3 gap-3">
                  <div className="stat bg-base-100/10 rounded-box p-4">
                    <div className="stat-title opacity-80">Customers</div>
                    <div className="stat-value text-primary">5k+</div>
                  </div>
                  <div className="stat bg-base-100/10 rounded-box p-4">
                    <div className="stat-title opacity-80">Menu Items</div>
                    <div className="stat-value text-secondary">150+</div>
                  </div>
                  <div className="stat bg-base-100/10 rounded-box p-4">
                    <div className="stat-title opacity-80">Avg. Delivery</div>
                    <div className="stat-value text-accent">25m</div>
                  </div>
                </div>
              </div>
            </div>
          </Pattern>
        </div>

        <div className="text-center mt-10 space-x-3">
          <Link to="/allfoods" className="btn btn-primary">Explore Menu</Link>
          <Link to="/signup" className="btn btn-ghost">Join Us</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
