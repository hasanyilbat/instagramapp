import { FaInstagram } from "react-icons/fa";
import React from "react";

export const Loader = () => {
  return (
    <div className="w-full h-full fixed top-0 flex left-0 bg-zinc-50 items-center justify-center text-pink-500 text-2xl  flex-col">
      <FaInstagram size={100} />
      <h6 className="font-semibold">Instagram</h6>
    </div>
  );
};

export default Loader;
