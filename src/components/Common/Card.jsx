import React from "react";
import { Link } from "react-router";


function Card({foodName,category,price,quantity,_id,foodImage}) {
  return (
    <div
    
    className="card transition-transform hover:-translate-y-3 duration-1000 bg-base-100 max-w-80 shadow-blue-300 shadow-sm">
      <figure>
        <img
          src={foodImage}
          alt="Shoes"
          className="hover:scale-110 duration-500 h-52 w-96 object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <div>
        <p>
          <span className="font-bold">Price: </span>{price}$
        </p>
        <p>
          <span className="font-bold">Category: </span>{category}
        </p>
        <p>
          <span className="font-bold">Quantity: </span>{quantity}
        </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
