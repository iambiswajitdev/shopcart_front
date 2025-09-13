"use client";
import React, { useRef } from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../ui/card/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../../ui/button/Button";

const EachProductSection = ({ subTitle, title, isSection }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px] mr-3"></div>
        <Heading title={subTitle} variant="sub" />
      </div>

      {/* Title + Timer + Nav */}
      <div
        className={`grid gap-3 items-center mb-9 ${
          !isSection ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        <Heading title={title} variant="main" />

        {isSection && (
          <div className="flex items-center justify-center space-x-6">
            {/* Countdown... */}
          </div>
        )}

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end space-x-3 mb-4">
          <button
            ref={prevRef}
            className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="[&_.swiper-scrollbar]:hidden"
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Products Button */}
      <div className="flex items-center justify-center pt-9">
        <Button url="/products">View All Products</Button>
      </div>
    </div>
  );
};

export default EachProductSection;
