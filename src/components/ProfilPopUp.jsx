import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";

const ProfilPopUp = ({ user, setProfileToggle }) => {
  const handleClose = (e) => {
    if (e.target.id === "container") {
      setProfileToggle(false);
    }
  };

  return (
    <div>
      <div
        className="text-sm w-[230px] bg-white"
        id="container3"
        onClick={handleClose}
      >
        <NavLink
          to={`/${user.username}`}
          className="flex items-center gap-x-2 px-4 py-2 hover:bg-zinc-50 focus-within:opacity-60"
        >
          <Icon name="profile" />
          <p className="text-sm">Profile</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2 hover:bg-zinc-50 focus-within:opacity-60">
          <Icon name="save" />
          <p>Saved</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2 hover:bg-zinc-50 focus-within:opacity-60">
          <Icon name="settings" />
          <p>Settings</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2 hover:bg-zinc-50 focus-within:opacity-60">
          <Icon name="problem" />
          <p>Report a problem</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2 hover:bg-zinc-50 focus-within:opacity-60">
          <Icon name="problem" />
          <p>Switch accounts</p>
        </NavLink>
        <NavLink
          to="logout"
          className="flex items-center gap-x-2 px-4 py-2 border-t hover:bg-zinc-50 focus-within:opacity-60"
        >
          <p>Log Out</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfilPopUp;
