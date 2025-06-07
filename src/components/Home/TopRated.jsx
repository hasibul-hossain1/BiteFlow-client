import React from "react";
import Card from "../Common/Card";
import { motion } from "motion/react";
import { useApp } from "../../hooks/AppContext";


function TopRated() {
  const {state}=useApp()
  console.log(state.foods.data)
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
    <section className="mb-20">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount:1 }}
        className="text-4xl text-center lg:mb-32 mb-10"
      >
        Top Rated Meals
      </motion.h3>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {state.foods?.data?.map((e, i) => (
          <motion.div
            key={i}
            viewport={{ once: false }}
            variants={cardVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
          >
            <Card category={e.foodCategory} _id={e._id} foodName={e.foodName} price={e.price} quantity={e.quantity} key={e._id}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TopRated;
