import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import AOS from "aos";
import { Autoplay, Navigation, Pagination } from "swiper";
const Slider = () => {
  AOS.init();
  const client = [
    {
      id: 1,
      name: "Jacky Leo",
      img: "https://i.ibb.co/Sytt0tp/Rectangle-16.png",
      des: "Excellent job. Sumi is very professional web Developer. She has done a great job. I will for sure hire him again for my future projects.",
    },
    {
      id: 2,
      name: " Tanisha Roy",
      img: "https://i.ibb.co/PWjCVVf/women33.jpg",
      des: "Excellent job. Sumi is very professional web Developer. She has done a great job. I will for sure hire him again for my future projects.",
    },
    {
      id: 3,
      name: "Tom kim",
      img: "https://i.ibb.co/WtFM0BF/man33.jpg",
      des: "Excellent job. Sumi is very professional web Developer. She has done a great job. I will for sure hire him again for my future projects.",
    },
  ];
  return (
    <div className="lg:px-24 px-6 py-6 ">
      <h1 className="text-secondary text-3xl lg:text-5xl font-bold text-center"
        data-aos='fade-down'
      >
        What Clients Say
      </h1>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#06b6d4",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {client.map((c) => (
          <SwiperSlide>
            <div className="hero min-h-screen text-white ">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={c.img}
                  className="max-w-sm rounded-lg shadow-2xl p-6 lg:p-12 mx-auto bg-black"
                  alt="man-img"
                />
                <div className="text-white text-start lg:w-1/2 px-6">
                  <h1 className="text-5xl font-bold">{c.name}</h1>
                  <p className="py-6">{c.des}</p>

                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p>Rating: 5/5</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
