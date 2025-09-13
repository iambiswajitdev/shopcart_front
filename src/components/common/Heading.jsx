// src/components/common/Heading.jsx
import React from "react";

const Heading = ({ title, variant = "main", className = "" }) => {
  const baseStyles = "font-semibold mb-2";

  const variants = {
    main: "text-[36px] text-gray-900", // Example: Browse By Category
    sub: "text-lg text-red-500", // Example: This Month
  };

  return (
    <h2 className={`${baseStyles} ${variants[variant]} ${className}`}>
      {title}
    </h2>
  );
};

export default Heading;
