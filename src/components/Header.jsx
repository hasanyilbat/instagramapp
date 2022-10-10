import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import AddPost from "./AddPost";
import { logout } from "./firebase";
import Icon from "./Icon";
import LogoOpener from "./LogoOpener";
import Notifications from "./Notifications";
import Search from "./Search";

const Header = ({ toggleDropdown, setToggleDropdown, notOn, setNotOn }) => {
  const user = useSelector((state) => state.auth.user);
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggle = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleNotifications = () => {
    setNotOn(!notOn);
  };

  return (
    <header className="bg-white border-b border-gray-300 flex item-center justify-between">
      <div className="flex items-center justify-between h-[60px] w-[975px] mx-auto">
        <div>
          <div className="flex items-center gap-x-2 relative">
            <Link to="/">
              <img
                className="h-[29px]"
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt=""
              />
            </Link>

            <div onClick={handleToggle}>
              <Icon name="chevron-down" className="rotate-180 cursor-pointer" />
              {toggleDropdown && (
                <LogoOpener setToggleDropdown={setToggleDropdown} />
              )}
            </div>
          </div>
        </div>
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
          <button onClick={() => setModalOpen(!modalOpen)}>
            <Icon name="new" size={24} />
          </button>
          <NavLink>
            <Icon name="explore" size={24} />
          </NavLink>
          <div>
            <div className="relative">
              <div onClick={handleNotifications}>
                <Icon name="heart" size={24} className="cursor-pointer" />
              </div>

              {notOn && <Notifications />}
            </div>
          </div>
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
      {modalOpen && <AddPost setModalOpen={setModalOpen} />}
    </header>
  );
};

export default Header;
