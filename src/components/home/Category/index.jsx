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
import CategoryCard from "../../ui/card/CategoryCard";

const Category = ({ subTitle, title }) => {
  return (
    <>
      <div className="container">
        <div className="flex items-center mb-4">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px] mr-3"></div>
          <Heading title={subTitle} variant="sub" />
        </div>
        <div className="grid gap-3 items-center mb-9 grid-cols-2">
          <Heading title={title} variant="main" />
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
          slidesPerView={6}
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
            <CategoryCard />
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
      </div>
    </>
  );
};

export default Category;
