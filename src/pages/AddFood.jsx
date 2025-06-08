import { useApp } from "../hooks/AppContext";
import { api } from "../lib/api";

const AddFood = () => {
  const { state } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const getData = new FormData(form);
    const formData = Object.fromEntries(getData.entries());
    const newFood = {
      ...formData,
      quantity: +formData.quantity,
      price: +formData.price,
      addedBy: {
        name: state?.user?.data?.displayName,
        email: state?.user?.data?.email,
      },
    };
    api
      .post("/newfood", newFood)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
              name="foodName"
              className="input outline outline-secondary input-bordered w-full"
              required
              placeholder="Food Name"
            />
          </div>
          <div>
            <label className="label font-semibold">Food Image</label>
            <input
              type="text"
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
              name="price"
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
              required
              className="input outline outline-secondary input-bordered w-full"
              placeholder="Quantity"
            />
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full" type="submit">
            Confirm Purchase
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddFood;
