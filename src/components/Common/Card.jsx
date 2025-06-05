import React from "react";


function Card({foodName,category,price}) {
  return (
    <div
    
    className="card transition-transform hover:-translate-y-3 duration-1000 bg-base-100 max-w-80 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="hover:scale-110 duration-500"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <div>
        <p>
          <span className="font-bold">Price: </span>{price}$
        </p>
        <p>
          <span className="font-bold">Category: </span>{category || "Italy"}
        </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
