import React from "react";
import Button from "../ui/button/Button";
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
            <Button className="cursor-pointer">Shop Now !</Button>
          </p>
        </div>
      </div>
      <div className="border-b-1 border-[#ccc] h-[94px] pb-3">
        <div className="container h-full">
          <div className="grid grid-cols-12 gap-3 items-end h-full">
            <div className="col-span-2">
              <h1 className="font-bold text-[24px]">Exclusive</h1>
            </div>
            <div className="col-span-6">
              <ul className="flex justify-around">
                {HEADER_MENU.map((item, index) => (
                  <li key={index}>
                    <Link className="text-[16px]" href={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-4">
              <div className="flex justify-between align-baseline">
                <input
                  className="w-[243px] bg-[#F5F5F5] pt-3 pb-3 px-2 rounded-md"
                  placeholder="What are you looking for?"
                />
                <Heart />
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
