import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "./firebase";
import Icon from "./Icon";
import Search from "./Search";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <header className="bg-white border-b border-gray-300 flex item-center justify-between">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img
            className="h-[29px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </Link>
        <Search />
        <nav className="flex items-center gap-x-6">
          <NavLink>
            <Icon name="home" size={24} />
          </NavLink>
          <NavLink>
            <Icon name="direct" size={24} />
          </NavLink>
          <NavLink>
            <Icon name="new" size={24} />
          </NavLink>
          <NavLink>
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink>
            <Icon name="heart" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
            <img
              src="/no-avatar.jpeg"
              alt=""
              className="w-6 h-6 rounded-full"
            />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
