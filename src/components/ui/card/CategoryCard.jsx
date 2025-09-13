import { Phone, Smartphone } from "lucide-react";
import React from "react";

const CategoryCard = () => {
  return (
    <>
      <div className="border-1 flex flex-col justify-center items-center p-3 hover:bg-[#DB4444] hover:text-[#fff]">
        <Smartphone />
        <h3>Phone</h3>
      </div>
    </>
  );
};

export default CategoryCard;
