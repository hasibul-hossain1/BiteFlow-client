import { useState } from "react";
import { useSelector } from "../hooks/AppContext";
import { useNavigate, useParams } from "react-router";
import { api } from "../lib/api";
import Swal from "sweetalert2";

const FoodPurchase = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const foods = useSelector((state) => state.foods);
  const { id } = useParams();
  const food = foods?.data.find((item) => item._id === id);

  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const purchaseData = {
      foodId: food._id,
      foodName: food.foodName,
      price: food.price,
      quantity,
      foodImage:food.foodImage,
      buyerName: user?.data?.displayName,
      buyerEmail: user?.data?.email,
      buyingDate: Date.now(),
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to place this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, place it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          api
            .post("/purchase", purchaseData)
            .then(() => {
              Swal.fire({
                title: "Success!",
                text: "Your order has been placed.",
                icon: "success",
                showConfirmButton:false,
                timer: 3000,
              });
              navigate("/myorders");
            })
            .catch((error) => {
              Swal.fire({
                title: "Oops!",
                text: error?.message || "Something went wrong.",
                icon: "error",
              });
            });
        }
      })
      .catch();
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-base-100 shadow-xl rounded-xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          You're One Step Away From Deliciousness!
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Food Info */}
          <div>
            <label className="label font-semibold">Food Name</label>
            <input
              type="text"
              value={food.foodName}
              readOnly
              className="input not-last-of-type:input-bordered w-full"
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
              className="input outline outline-secondary input-bordered w-full"
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
          {food.quantity === 0 && <p className="text-red-500 font-bold text-center">item is not available</p>}
          {/* Submit */}
          <button
            disabled={food.quantity ? false : true}
            className="btn btn-primary w-full"
            type="submit"
          >
            Confirm Purchase
          </button>
        </form>
      </div>
    </section>
  );
};

export default FoodPurchase;
