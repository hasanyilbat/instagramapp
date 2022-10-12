import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";

const ProfilPopUp = ({ user }) => {
  return (
    <div>
      <div className="text-sm w-[230px] bg-white">
        <NavLink
          to={`/${user.username}`}
          className="flex items-center gap-x-2 px-4 py-2"
        >
          <Icon name="profile" />
          <p className="text-sm">Profile</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2">
          <Icon name="save" />
          <p>Saved</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2">
          <Icon name="settings" />
          <p>Settings</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2">
          <Icon name="problem" />
          <p>Report a problem</p>
        </NavLink>
        <NavLink className="flex items-center gap-x-2 px-4 py-2">
          <Icon name="problem" />
          <p>Switch accounts</p>
        </NavLink>
        <NavLink
          to="logout"
          className="flex items-center gap-x-2 px-4 py-2 border-t"
        >
          <p>Log Out</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfilPopUp;
