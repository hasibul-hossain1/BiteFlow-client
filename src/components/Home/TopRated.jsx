import React from "react";
import Card from "../Common/Card";
import { motion } from "motion/react";
import { useSelector } from "../../hooks/AppContext";
import { Link } from "react-router";


function TopRated() {
  const foods=useSelector(state=>state.foods)
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
        viewport={{ once: true, amount:1 }}
        className="text-4xl text-center lg:mb-32 mb-10"
      >
        Top Rated Meals
      </motion.h3>
      <div className="grid grid-cols-1 gap-8 justify-items-center mt-20 md:grid-cols-2 xl:grid-cols-3">
        {[...foods.data]?.sort((b,a)=>a.purchaseCount-b.purchaseCount).slice(0,6).map((e, i) => (
          <motion.div
            key={i}
            viewport={{ once: true }}
            variants={cardVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
          >
            <Card category={e.foodCategory} foodImage={e.foodImage} _id={e._id} foodName={e.foodName} price={e.price} quantity={e.quantity} key={e._id}/>
          </motion.div>
        ))}
        <Link to='/allfoods' className="btn btn-primary col-span-3 mt-10">See All</Link>
      </div>
    </section>
  );
}

export default TopRated;
