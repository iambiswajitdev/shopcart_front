import React from "react";
import Buttons from "../ui/button/Button";
import { HEADER_MENU } from "@/utilit/constant";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="bg-black pb-2 pt-2">
        <div className="container">
          <p className="text-[#fff] text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Buttons className="cursor-pointer">Shop Now !</Buttons>
          </p>
        </div>
      </div>
      <div className="border-b border-[#ccc] h-[94px] flex items-center">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-bold text-[24px]">Exclusive</h1>

          {/* Menu */}
          <ul className="flex space-x-6">
            {HEADER_MENU.map((item, index) => (
              <li key={index}>
                <Link className="text-[16px]" href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search + Icons */}
          <div className="flex items-center space-x-4">
            <input
              className="w-[243px] bg-[#F5F5F5] py-2 px-2 rounded-md"
              placeholder="What are you looking for?"
            />
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
