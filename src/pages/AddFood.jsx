import Swal from "sweetalert2";
import { useDispatch, useSelector } from "../hooks/AppContext";
import { api } from "../lib/api";
import { ADD_NEW_FOOD } from "../reducers/reducer";
import { useNavigate } from "react-router";
import { useState } from "react";

const AddFood = () => {
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const getData = new FormData(form);
    const formData = Object.fromEntries(getData.entries());
    const newFood = {
      ...formData,
      quantity: +formData.quantity,
      price: +formData.price,
      purchaseCount: 0,
      addedBy: {
        name: user?.data?.displayName,
        email: user?.data?.email,
      },
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add this!",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .post("/newfood", newFood)
          .then((res) => {
            if (res.data?.insertedId) {
              newFood._id = res.data?.insertedId;
              dispatch({ type: ADD_NEW_FOOD, payload: newFood });
            }
            navigate("/myfoods");
            Swal.fire({
              title: "item added!",
              text: "Your food item has been added successfully.",
              icon: "success",
              showConfirmButton:false,
              timer: 3000,
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err?.message || "Something went wrong!",
            });
          });
      }
    });
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto rounded-2xl border border-base-300 bg-base-100/70 shadow-xl ring-1 ring-base-300/40 overflow-hidden">
        <div className="px-6 py-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-base-300/60">
          <h2 className="text-3xl font-bold text-center">Create Food Item</h2>
          <p className="text-center text-base-content/70 mt-1">Add a new dish to your catalog with rich details.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 grid gap-5 md:grid-cols-2">
          {/* Food Name */}
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text font-semibold">Food Name</span></label>
            <input
              type="text"
              name="foodName"
              className="input input-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
              required
              placeholder="e.g., Spicy Grilled Chicken"
            />
          </div>

          {/* Image URL */}
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text font-semibold">Food Image URL</span></label>
            <input
              type="url"
              name="foodImage"
              className="input input-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
              required
              placeholder="https://..."
              onChange={(e)=>setPreviewUrl(e.target.value)}
            />
            {previewUrl ? (
              <div className="mt-3 rounded-lg overflow-hidden border border-base-300 bg-base-200/40">
                <img src={previewUrl} alt="Preview" className="w-full h-40 object-cover object-center" />
              </div>
            ) : null}
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Food Category</span></label>
            <input
              type="text"
              name="foodCategory"
              className="input input-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
              required
              placeholder="e.g., Grill, Vegan, Dessert"
            />
          </div>

          {/* Origin */}
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Food Origin</span></label>
            <input
              type="text"
              name="foodOrigin"
              className="input input-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
              required
              placeholder="e.g., Mediterranean"
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Price ($)</span></label>
            <input
              type="number"
              step="any"
              name="price"
              defaultValue={1}
              className="input input-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
              required
              placeholder="e.g., 12.99"
            />
          </div>

          {/* Quantity */}
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Quantity</span></label>
            <input
              type="number"
              name="quantity"
              min={1}
              max={250}
              defaultValue={1}
              required
              className="input input-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none"
              placeholder="e.g., 20"
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label"><span className="label-text font-semibold">Food Description</span></label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none min-h-28"
              placeholder="Describe taste, key ingredients, spice level, allergens, etc."
              name="description"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button className="btn btn-primary w-full" type="submit">
              Add Food
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddFood;
