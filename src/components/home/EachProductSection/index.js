"use client";

import React from "react";
import Heading from "../../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../ui/card/ProductCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../../ui/button/Button";
const EachProductSection = ({ subTitle, title, isSection }) => {
  return (
    <>
      <div className="container">
        <div className="flex items-center mb-4">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px] mr-3"></div>
          <Heading title={subTitle} variant="sub" />
        </div>
        <div
          className={`grid gap-3 items-center mb-9 ${
            !isSection ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          <Heading title={title} variant="main" />
          <div
            className={`${
              !isSection
                ? "hidden"
                : "flex items-center justify-center space-x-6"
            }`}
          >
            <div className="text-center">
              <div className="text-[32px] font-bold">03</div>
              <div className="text-sm">Days</div>
            </div>

            <span className="text-red-400 text-2xl">:</span>

            <div className="text-center">
              <div className="text-[32px] font-bold">23</div>
              <div className="text-sm">Hours</div>
            </div>

            <span className="text-red-400 text-2xl">:</span>

            <div className="text-center">
              <div className="text-[32px] font-bold">19</div>
              <div className="text-sm">Minutes</div>
            </div>

            <span className="text-red-400 text-2xl">:</span>

            <div className="text-center">
              <div className="text-[32px] font-bold">56</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <div className="relative">
            {/* Custom Navigation Buttons */}
            <div className="flex justify-end space-x-3 mb-4">
              <button className="custom-prev cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                <ArrowLeft />
              </button>
              <button className="custom-next cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className=" [&_.swiper-scrollbar]:hidden "
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center pt-9">
          <Button title="View All Products" url="#" />
          {/* <Button url="/products">View All Products</Button> */}
        </div>
      </div>
    </>
  );
};

export default EachProductSection;
