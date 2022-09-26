import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
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
        <nav>
          <button>Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
