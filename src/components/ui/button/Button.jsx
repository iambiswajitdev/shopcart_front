"use client";
import React from "react";
import Link from "next/link";

const Button = ({ children, title, className = "", url, ...props }) => {
  const baseClass =
    "px-4 py-2 rounded-md font-semibold transition duration-200 ease-in-out";
  if (url) {
    return (
      <Link
        href={url}
        className={`${baseClass} ${className} justify-center flex items-center bg-[#DB4444] text-[#fff] w-[234px] h-[56px]`}
        {...props}
      >
        {children || title}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children || title}
    </button>
  );
};

export default Button;
