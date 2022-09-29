import React from "react";

const Seperator = ({ label = "OR" }) => {
  return (
    <div className="flex items-center my-2">
      <div className="h-px bg-gray-300 flex-1" />
      <span className="px-4 text-gray-500 text-[13px] font-semibold my-2.5 mb-3.5">
        {label}
      </span>
      <div className="h-px bg-gray-300 flex-1" />
    </div>
  );
};

export default Seperator;
