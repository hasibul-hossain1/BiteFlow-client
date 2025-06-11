import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import InfiniteLoader from "../components/Common/InfinteLoader";
import { duration } from "moment/moment";

const gallery = [
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
  "https://images.pexels.com/photos/1551319/pexels-photo-1551319.jpeg",
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg",
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  "https://images.pexels.com/photos/1435905/pexels-photo-1435905.jpeg",
  "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
  "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg",
  "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
];

const GalleryPage = () => {
  const [allImage, setAllImage] = useState([...gallery]);
  const [visibleCount, setVisibleCount] = useState(6);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (inView && visibleCount) {
      timeout = setTimeout(() => {
        setAllImage((prev) => {
          if (visibleCount > prev.length - 7) {
            return [...prev, ...gallery.sort(() => Math.random() - 0.5)];
          }
          return prev;
        });
        setVisibleCount((prev) => prev + 6);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [inView, visibleCount, setAllImage]);

  const cardVariants = {
    hidden: { opacity: 0.2, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      },
    }),
  };

  return (
    <section className="pt-10 px-4 max-w-6xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-center font-bold mb-6"
      >
        Foods Gallery
      </motion.h3>
      <div className="divider"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allImage.slice(0, visibleCount).map((src, index) => (
          <motion.div
            key={index}
            viewport={{ once: true }}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            className="cursor-pointer"
            onClick={() => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          >
            <img
              src={src}
              alt={`Food ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Infinite Loader and Observer */}
      <InfiniteLoader />
      <div ref={ref} className="h-12" />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        close={() => setLightboxOpen(false)}
        slides={allImage.map((src) => ({ src }))}
      />
    </section>
  );
};

export default GalleryPage;
