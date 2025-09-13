import { Eye, Heart } from "lucide-react";
import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="w-64 rounded-xl bg-[#F5F5F5] overflow-hidden relative group cursor-pointer">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -35%
        </span>
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="bg-white p-2 rounded-full shadow hover:text-red-500">
            <Heart />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:text-blue-500">
            <Eye />
          </button>
        </div>
        <div className="relative  h-[250px] flex items-center justify-center group overflow-hidden">
          <img src="/images/p1.png" alt="Keyboard" className="w-[150px]" />

          <div
            className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 
           transform translate-y-full group-hover:translate-y-0 
           transition-transform duration-300 ease-in-out"
          >
            Add To Cart
          </div>
        </div>

        <div className="p-4 bg-[#fff]">
          <h3 className="text-gray-800 font-medium">AK-900 Wired Keyboard</h3>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-500 font-semibold">$960</span>
            <span className="text-gray-400 line-through">$1160</span>
          </div>

          <div className="flex items-center mt-2 text-yellow-400">
            ★★★★☆
            <span className="text-gray-500 text-sm ml-2">(75)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
