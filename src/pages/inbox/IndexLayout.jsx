import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const IndexLayout = () => {
  return (
    <div className="border border-gray-300 bg-white h-[calc(100vh-97px)] rounded flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default IndexLayout;
