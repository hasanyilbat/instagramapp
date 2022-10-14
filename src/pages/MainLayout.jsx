import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const MainLayout = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [notOn, setNotOn] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  //! close popup menu
  const closeToggle = (e) => {
    if (e.target.id !== "logoPopup" && toggleDropdown) {
      setToggleDropdown(false);
    }
    if (e.target.id !== "notification-popup" && notOn) {
      setNotOn(false);
    }
    if (e.target.id !== "container3" && profileToggle) {
      setProfileToggle(false);
    }
  };

  return (
    <div onClick={closeToggle}>
      <Header
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
        notOn={notOn}
        setNotOn={setNotOn}
        profileToggle={profileToggle}
        setProfileToggle={setProfileToggle}
      />
      <div className="container mx-auto pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
