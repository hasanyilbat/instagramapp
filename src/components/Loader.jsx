import React from "react";

export const Loader = () => {
  return (
    <div className="w-full h-full fixed top-0 flex left-0 bg-black items-center justify-center text-white text-2xl">
      Yükleniyor...
    </div>
  );
};

export default Loader;
