import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import Post from "../components/Post";

const Following = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" w-[821px] ">
        <div
          className="flex items-center cursor-pointer w-28"
          onClick={() => navigate("/")}
        >
          <Icon name="chevron-down" className="-rotate-90" size={24} />
          <p className="text-[18px] font-semibold">Following</p>
        </div>
        <Post />
      </div>
    </div>
  );
};

export default Following;
