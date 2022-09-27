import React, { useState } from "react";
import Icon from "./Icon";
import { AiFillCloseCircle } from "react-icons/ai";
import classNames from "classnames";
const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[268px] relative group">
      <span
        className={classNames({
          "absolute top-0 left-0 flex items-center justify-center h-9 w-9 text-[#8e8e8e] pointer-events-none ": true,
          hidden: open,
        })}
      >
        <Icon name="search" />
      </span>
      <input
        type="text"
        placeholder="Search"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="h-9 w-full rounded-lg bg-[#efefef] pl-9 group-focus-within:pl-3 outline-none"
      />
      <button
        onClick={() => setOpen(false)}
        className={classNames({
          "absolute top-0 right-0 h-9 w-9  justify-center items-center text-[#c7c7c7] hidden": true,
          "  !flex": open,
        })}
      >
        <AiFillCloseCircle />
      </button>
    </div>
  );
};

export default Search;
