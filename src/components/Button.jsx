import React from "react";

const Button = ({ type = "button", children, ...props }) => {
  return (
    <button
      type={type}
      {...props}
      className="h-[30px] bg-brand text-white text-sm rounded-xs my-2 font-medium disabled:opacity-50 mt-1 w-full flex items-center justify-center gap-x-2"
    >
      {children}
    </button>
  );
};

export default Button;
