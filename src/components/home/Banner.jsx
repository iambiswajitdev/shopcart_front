import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container mb-30">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-2">
            <ul className="border-r-1 border-[#ccc] py-6 space-y-4">
              <li className="cursor-pointer hover:text-red-500">
                Woman’s Fashion
              </li>
              <li className="cursor-pointer hover:text-red-500">
                Men’s Fashion
              </li>
              <li className="cursor-pointer hover:text-red-500">Electronics</li>
              <li className="cursor-pointer hover:text-red-500">
                Home & Lifestyle
              </li>
              <li className="cursor-pointer hover:text-red-500">Medicine</li>
              <li className="cursor-pointer hover:text-red-500">Sports</li>
              <li className="cursor-pointer hover:text-red-500">Baby’s Toys</li>
              <li className="cursor-pointer hover:text-red-500">Groceries</li>
              <li className="cursor-pointer hover:text-red-500">
                Health & Beauty
              </li>
            </ul>
          </div>
          <div className="col-span-10 pt-7">
            <Image
              src="/images/banner.png"
              alt="Banner"
              layout="responsive" // makes it scale
              width={1920} // base width
              height={600} // base height
              className="w-full h-auto" // ensures full width
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
