// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
import img4 from "../assets/hero4.jpg";
import img5 from "../assets/hero5.jpg";
import img6 from "../assets/hero6.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} className="h-[80vh] object-cover object-center w-full" alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
