import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../lib/api";
import { useApp } from "../hooks/AppContext";
import { motion } from "motion/react";
import Loader from '../components/Common/Loader'

function MyFoods() {
  const { state } = useApp();
  const [myFoods, setMyFoods] = useState({
    loading: true,
    error: null,
    data: [],
  });
  const userEmail = state.user?.data?.email;

  useEffect(() => {
    api.get(`/myfoods?email=${userEmail}`).then((res) => {
      setMyFoods({ ...MyFoods, loading: false, data: res.data });
    });
  }, [userEmail]);
  if (myFoods.loading) {
    return <Loader/>
  }
  if (!myFoods?.data?.length) {
    return <div className="flex justify-center items-center h-[80vh]"><h2 className="text-3xl">You don't added any food yet. please add first...</h2></div>
  }
  return (
    <section className="pt-10">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-center font-bold mb-6"
      >
        Your Added Foods
      </motion.h3>
      <div className="divider"></div>
      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myFoods?.data?.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.foodName}</td>
                  <td>{item.price}$</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MyFoods;
