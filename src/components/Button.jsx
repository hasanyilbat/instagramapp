import React from "react";

const Button = ({ type = "button", children, ...props }) => {
  return (
    <button
      type={type}
      {...props}
      className="h-[30px] bg-brand text-white text-sm rounded my-2 font-medium disabled:opacity-50 mt-1 w-full flex items-center justify-center gap-x-2 px-2.5"
    >
      {children}
    </button>
  );
};

export default Button;
