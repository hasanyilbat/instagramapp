import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const LogoOpener = () => {
  return (
    <div className="absolute bg-white drop-shadow-md text-sm top-10 left-0 z-10">
      <div
        className="flex items-center justify-start gap-x-2 px-4 py-2"
        id="toggleMenu"
      >
        <Icon name="follow_icon" size={16} />
        <NavLink to="following">Follow</NavLink>
      </div>
      <div className="flex items-center justify-start gap-x-2 px-4 py-2">
        <Icon name="star" size={16} />
        <NavLink to="favorites">Favorites</NavLink>
      </div>
    </div>
  );
};

export default LogoOpener;
