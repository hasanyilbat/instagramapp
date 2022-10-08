import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";

const Favorites = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className=" w-[821px] ">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Icon name="chevron-down" className="-rotate-90" size={24} />
          <p className="text-[18px] font-semibold">Favorites</p>
        </div>
        <div className="flex justify-center flex-col text-center gap-y-2">
          <Icon name="favorite-star" size={96} className="mx-auto mb-4" />
          <p className="text-[22px] font-thin">
            Choose the accounts you can't miss out on
          </p>
          <p className="text-sm font-thin text-[#8e8e8e]">
            Add accounts to your favorites to see their posts here, starting
            with the most recent posts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
