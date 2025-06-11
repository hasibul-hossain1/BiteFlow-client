import React from "react";
import { motion } from "motion/react";
import { useSelector } from "../hooks/AppContext";
import Card from "../components/Common/Card";
import { useState } from "react";

function AllFoods() {
  const [searchTerm, setSearchTerm] = useState("");
  const foods = useSelector((state) => state.foods);
  const filterFoods =
    foods.data.length &&
    [...foods.data]
      .reverse()
      .filter((item) =>
        item.foodName.toLowerCase().includes(searchTerm.toLowerCase())
      );
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="mt-30">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount:0.2 }}
        className="text-3xl md:text-4xl text-center font-bold mb-6"
      >
        Explore Our Full Menu
      </motion.h3>
      <p className="mt-5 text-center">
        From classic favorites to new delights — discover every delicious item
        we proudly serve.
      </p>
      <div className="divider"></div>
      <div className="text-center mt-5">
        <label className="input border-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="grow"
            placeholder="Search your favorite food"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-8 justify-items-center mt-20 md:grid-cols-2 xl:grid-cols-3">
        {filterFoods.length ? (
          filterFoods.map((item, i) => {
            return (
              <motion.div
                key={i}
                viewport={{ once: false }}
                variants={cardVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                whileInView="visible"
              >
                <Card
                  key={item._id}
                  _id={item._id}
                  quantity={item.quantity}
                  foodName={item.foodName}
                  price={item.price}
                  category={item.foodCategory}
                  foodImage={item.foodImage}
                />
              </motion.div>
            );
          })
        ) : (
          <h4 className="text-3x font-bold text-center mt-20">
            No item found with this name
          </h4>
        )}
      </div>
    </section>
  );
}

export default AllFoods;
