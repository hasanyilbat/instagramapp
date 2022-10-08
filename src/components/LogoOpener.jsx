import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { useDetectClickOutside } from "react-detect-click-outside";

const LogoOpener = ({ closeToggle, toggleDropdown }) => {
  const ref = useDetectClickOutside({
    onTriggered: closeToggle,
    disableClick: toggleDropdown,
  });
  console.log(toggleDropdown);
  return (
    <div
      className="absolute bg-white drop-shadow-md text-sm top-10 left-0"
      ref={ref}
    >
      <div className="flex items-center justify-start gap-x-2 px-4 py-2">
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
