import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../lib/api";
import { motion } from "motion/react";
import Loader from "../components/Common/Loader";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineOpenInBrowser } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import {  useSelector } from "../hooks/AppContext";

function MyFoods() {
  const navigate = useNavigate();
    const user = useSelector((state) => state.user);
  const [myFoods, setMyFoods] = useState({
    loading: true,
    error: null,
    data: [],
  });
  const userEmail = user?.data?.email;

  useEffect(() => {
    setMyFoods(prev=>({...prev,loading:true}))
    api.get(`/myfoods?email=${userEmail}`).then((res) => {
      setMyFoods(prev=>({ ...prev, loading: false, data: res.data }));
    }).catch(err=>{
      setMyFoods(prev=>({
        ...prev,error:err.message
      }))
    })
  }, [userEmail]);
  if (myFoods.error) {
    return <ErrorPage message={myFoods.error} />;
  }
  if (myFoods.loading) {
    return <Loader />;
  }
  if (!myFoods?.data?.length) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h2 className="text-3xl">
          You don't added any food yet. please add first...
        </h2>
      </div>
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete(`/myfoods/${id}`)
          .then((res) => {
            if (res?.data?.deletedCount) {
              const removeItem = myFoods?.data.filter(
                (item) => item._id !== id
              );
              setMyFoods({ ...myFoods, data: removeItem });
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
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
              <th className="px-15">Actions</th>
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
                  <th className="text-nowrap">
                    <button
                      onClick={() => navigate(`/details/${item._id}`)}
                      className="btn btn-ghost btn-sm"
                    >
                      <MdOutlineOpenInBrowser size={20} />
                    </button>
                    <Link state={item} to='/myfoods/update' className="btn btn-ghost btn-sm">
                      <FaEdit size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-sm"
                    >
                      <MdDelete size={20} />
                    </button>
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
