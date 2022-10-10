import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Notifications = () => {
  const suggestions = [
    {
      name: "Ahmet Yılmaz",
      followed: "Ali",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      time: "5h",
    },
    {
      name: "Mehmet Yılmaz",
      followed: "Ayşe",
      avatar: "https://cdn-icons-png.flaticon.com/512/168/168882.png",
      time: "1w",
    },
    {
      name: "Tayfun Balta",
      followed: "Ferdi",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU",
      time: "2w",
    },
    {
      name: "Ferdi Yılmaz",
      followed: "Tayfun",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0CUH1TfGkpsNtzjKZdzoABXCeAbUS65TWO9720r-xAn8qBlkCBDdK0FIjRCYyPKc5Xo&usqp=CAU",
      time: "3w",
    },
    {
      name: "Ece Korkmaz",
      followed: "Fatma",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg",
      time: "4w",
    },
  ];

  return (
    <div className="z-20 ">
      <div className="absolute w-[500px] top-8 -right-11 bg-white h-[362px] overflow-auto">
        <div className="flex items-center justify-between border-b border-b-gray-300 py-[12.5px] px-[8.5px] z-10 ">
          <div className="relative flex gap-x-4 ">
            <img
              className="w-8 h-8 rounded-full border border-gray-400 bg-white"
              src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678130-profile-alt-4-512.png"
              alt=""
            />
            <img
              className="w-8 h-8 rounded-full absolute top-1.5 left-1.5 border border-gray-300 bg-white"
              src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
              alt=""
            />
            <div className="flex flex-col">
              <h6 className="text-sm font-semibold">Follow requests</h6>
              <p className="text-sm text-[#8e8e8e]">ahmet555 + 23others</p>
            </div>
          </div>

          <Link to="#" className="flex items-center gap-x-4">
            <div className="bg-brand w-2 h-2 rounded-full"></div>
            <Icon name="chevron-down" className="rotate-90 text-[#8e8e8e]" />
          </Link>
        </div>
        {/*this month  */}
        <div>
          <h6
            className="font-semibold text-sm p-1 my-2"
            id="notification-popup"
          >
            This Month
          </h6>
          <div>
            {suggestions.map((person) => {
              return (
                <Link
                  to="#"
                  className="flex justify-between items-center pb-5 px-4"
                >
                  <div className="flex gap-x-3 items-center">
                    <img
                      src={person.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="w-[270px]">
                      <p className="text-sm">
                        <span className="font-semibold">{person.name}</span>{" "}
                        started following you.{" "}
                        <span className="text-[#8e8e8e] text-sm">
                          {person.time}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="text-[12px] font-semibold border border-gray-300 py-[5px] w-[114px]">
                      Following
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
