import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
