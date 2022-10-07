import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "./firebase";
import Icon from "./Icon";
import LogoOpener from "./LogoOpener";
import Search from "./Search";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleToggle = () => {
    setToggleDropdown((prevState) => !prevState);
  };
  const closeToggle = () => {
    setToggleDropdown(false);
  };
  console.log(toggleDropdown);
  return (
    <header className="bg-white border-b border-gray-300 flex item-center justify-between">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <div className="flex items-center gap-x-2 relative">
            <img
              className="h-[29px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
            <div onClick={handleToggle}>
              <Icon name="chevron-down" className="rotate-180" />
              {toggleDropdown && <LogoOpener closeToggle={closeToggle} />}
            </div>
          </div>
        </Link>
        <Search />
        <nav className="flex items-center gap-x-5">
          <NavLink to="/">
            {({ isActive }) => (
              <Icon name={isActive ? "home-filled" : "home"} size={24} />
            )}
          </NavLink>
          <NavLink to="/inbox">
            {({ isActive }) => (
              <Icon name={isActive ? "direct-filled" : "direct"} size={24} />
            )}
          </NavLink>
          <NavLink to="/">
            <Icon name="new" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
            {({ isActive }) => (
              <img
                src="/no-avatar.jpeg"
                alt=""
                className={classNames({
                  "w-6 h-6 rounded-full": true,
                  "ring-1 ring-offset-1 ring-black": isActive,
                })}
              />
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
