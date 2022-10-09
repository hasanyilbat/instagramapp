import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const MainLayout = () => {
  const closeToggle = (e, toggle) => {
    console.log(e.target.id);
    // if (e.target.id !== "toggleMenu") {
    //   console.log(e.target.id);
    // }
  };
  return (
    <div onClick={closeToggle}>
      <Header closeToggle={closeToggle} />
      <div className="container mx-auto pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
