"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image1 from "@/assets/before-after-images/BEFORE-AFTER-IMAGES-720x447/BEFORE-AFTER-IMAGES-1-780x557.jpg";
import Image2 from "@/assets/before-after-images/BEFORE-AFTER-IMAGES-720x447/BEFORE-AFTER-IMAGES-10-720x447.jpg";
import Image3 from "@/assets/before-after-images/BEFORE-AFTER-IMAGES-720x447/BEFORE-AFTER-IMAGES-11-720x447.jpg";
import Image4 from "@/assets/before-after-images/BEFORE-AFTER-IMAGES-720x447/BEFORE-AFTER-IMAGES-13-720x447.jpg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const HomeSuccessStories = () => {
  const slides = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image2,
    },
    {
      id: 3,
      image: Image3,
    },
    {
      id: 4,
      image: Image4,
    },
  ];

  return (
    <section className="py-10 bg-gray-50 w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Success Stories
        </h2>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1.3} // Reduced from 1.5 for better focus
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.25,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
            }}
            className="w-full"
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id} className="w-full">
                <div className="relative h-64 md:h-96  rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={`Success Story ${item.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={item.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* More Compact Navigation Buttons */}
            <div className="swiper-button-prev h-2 ">
              <FaArrowAltCircleLeft  />
            </div>
            <div className="swiper-button-next">
              <FaArrowAltCircleRight />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeSuccessStories;
