import React from "react";
import { Link } from "react-router";

function Card({ foodName, category, price, quantity, _id, foodImage }) {
  return (
    <div className="group relative card w-full max-w-xs md:max-w-sm bg-base-100/70 backdrop-blur-sm border border-base-300 rounded-2xl shadow-sm transform-gpu transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl hover:shadow-primary/20 hover:ring-2 hover:ring-primary/40 hover:ring-offset-2 hover:ring-offset-base-100 overflow-hidden">
      <figure className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-3 left-3 badge badge-primary shadow-md">${price}</span>
        <span className="absolute top-3 right-3 badge badge-secondary shadow-md">{category}</span>
      </figure>
      <div className="card-body gap-3">
        <h2 className="card-title leading-tight">{foodName}</h2>
        <div className="text-sm text-base-content/70 space-y-1">
          <p>
            <span className="font-semibold text-base-content/80">Available:</span> {quantity} pcs
          </p>
        </div>
        <div className="card-actions mt-2">
          <Link
            to={`/details/${_id}`}
            className="btn btn-primary btn-block transition-all duration-300 hover:brightness-110"
            aria-label={`View details for ${foodName}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
