import React from "react";
import Buttons from "../../ui/button/Buttons";
import Image from "next/image";

const TopCategori = () => {
  return (
    <>
      <div className="container bg-black mt-20">
        <div className="p-15 grid grid-cols-12 gap-3">
          <div className="col-span-6">
            <span className="text-[#00FF66] mb-5">Category</span>
            <h1 className="text-[48px] text-[#fff] mb-7">
              Enhance Your Music Experience
            </h1>
            <Buttons url="#">Buy Now</Buttons>
          </div>
          <div className="col-span-6">
            <div
              className="relative w-full h-full"
              // style={{ position: "relative", width: "400px", height: "300px" }}
            >
              <Image
                src="/images/JBL_BOOMBOX.png"
                alt="JBL Boombox"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategori;
