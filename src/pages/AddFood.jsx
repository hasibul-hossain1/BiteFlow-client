import Swal from "sweetalert2";
import { useDispatch, useSelector } from "../hooks/AppContext";
import { api } from "../lib/api";
import { ADD_NEW_FOOD } from "../reducers/reducer";
import { useNavigate } from "react-router";

const AddFood = () => {
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const navigate = useNavigate();

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
    <section className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-base-100 shadow-xl rounded-xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Food Item</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Food Info */}
          <div>
            <label className="label font-semibold">Food Name</label>
            <input
              type="text"
              name="foodName"
              className="input outline outline-secondary input-bordered w-full"
              required
              placeholder="Food Name"
            />
          </div>
          <div>
            <label className="label font-semibold">Food Image</label>
            <input
              type="url"
              name="foodImage"
              className="input outline outline-secondary input-bordered w-full"
              required
              placeholder="Food Image url"
            />
          </div>
          <div>
            <label className="label font-semibold">Food Category</label>
            <input
              type="text"
              name="foodCategory"
              className="input outline outline-secondary input-bordered w-full"
              required
              placeholder="Food Category"
            />
          </div>

          <div>
            <label className="label font-semibold">Price ($)</label>
            <input
              type="number"
              step="any"
              name="price"
              defaultValue={1}
              className="input input-bordered outline outline-secondary w-full"
              required
              placeholder="Food Price by Dollar"
            />
          </div>

          {/* Purchase Quantity */}
          <div>
            <label className="label font-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              min={1}
              max={250}
              defaultValue={1}
              required
              className="input outline outline-secondary input-bordered w-full"
              placeholder="Quantity"
            />
          </div>
          <div>
            <label className="label font-semibold">Food Origin</label>
            <input
              type="text"
              name="foodOrigin"
              required
              className="input outline outline-secondary input-bordered w-full"
              placeholder="Food Origin"
            />
          </div>

          <div>
            <label className="label font-semibold">Food Description</label>
            <textarea
              className="textarea outline outline-secondary w-full"
              placeholder="Food Description"
              name="description"
            ></textarea>
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full" type="submit">
            Add Food
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddFood;
