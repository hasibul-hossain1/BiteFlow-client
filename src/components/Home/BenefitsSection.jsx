import { motion } from "motion/react";
import { FaShippingFast, FaHeadset, FaTruck } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function BenefitsSection() {
  return (
    <section className="bg-base-300 py-12 lg:mt-40 lg:mb-20 lg:px-20 px-5 mb:10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6">
          All The Benefits From Our Side Are For You
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FaShippingFast />}
            title="Free Shipping"
            subtitle="Free on orders over $25"
          />
          <FeatureCard
            icon={<FaTruck />}
            title="Fast Delivery"
            subtitle="We provide super fast service"
          />
          <FeatureCard
            icon={<FaHeadset />}
            title="24/7 Support"
            subtitle="Friendly support at any time"
          />
        </div>
      </div>
    </section>
  );
}
