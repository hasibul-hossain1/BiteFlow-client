import React, { useState } from "react";
import { useApp } from "../hooks/AppContext";

const FoodPurchase = () => {
  const { state } = useApp();
  const user = state.user;
  console.log(user);

  // Dummy food for example. In a real app, fetch this based on route param.
  const food = {
    _id: "6840dad63033edc9e7204a8b",
    foodName: "Tom Yum Soup",
    foodImage: "https://example.com/images/tom-yum-soup.jpg",
    price: 7.75,
    quantity: 18,
  };

  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const purchaseData = {
      foodId: food._id,
      foodName: food.foodName,
      price: food.price,
      quantity,
      buyerName: user?.data?.displayName,
      buyerEmail: user?.data?.email,
      buyingDate: Date.now(),
    };

    console.log("Sending this to backend:", purchaseData);

    // TODO: Replace this with your API call
    // api.post("/purchase", purchaseData).then().catch()
    alert("Purchase recorded successfully!");
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-base-100 shadow-xl rounded-xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          You're One Step Away From Deliciousness!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Food Info */}
          <div>
            <label className="label font-semibold">Food Name</label>
            <input
              type="text"
              value={food.foodName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-semibold">Price ($)</label>
            <input
              type="number"
              value={food.price}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* Purchase Quantity */}
          <div>
            <label className="label font-semibold">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              max={food.quantity}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Buyer Info */}
          <div>
            <label className="label font-semibold">Buyer Name</label>
            <input
              type="text"
              value={user?.data?.displayName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-semibold">Buyer Email</label>
            <input
              type="email"
              value={user?.data?.email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full" type="submit">
            Purchase
          </button>
        </form>
      </div>
    </section>
  );
};

export default FoodPurchase;
