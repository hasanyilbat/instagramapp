import React from "react";

const Suggestions = () => {
  const suggestions = [
    {
      name: "Ahmet Yılmaz",
      followed: "Ali",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      name: "Mehmet Yılmaz",
      followed: "Ayşe",
      avatar: "https://cdn-icons-png.flaticon.com/512/168/168882.png",
    },
    {
      name: "Tayfun Balta",
      followed: "Ferdi",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa69_HGc_i3MXKCPZzCfAjBZC4bXJsn0rS0Ufe6H-ctZz5FbIVaPkd1jCPTpKwPruIT3Q&usqp=CAU",
    },
    {
      name: "Ferdi Yılmaz",
      followed: "Tayfun",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0CUH1TfGkpsNtzjKZdzoABXCeAbUS65TWO9720r-xAn8qBlkCBDdK0FIjRCYyPKc5Xo&usqp=CAU",
    },
    {
      name: "Ece Korkmaz",
      followed: "Fatma",
      avatar:
        "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg",
    },
  ];

  return (
    <div className="w-[315px]  py-2">
      <div className="flex justify-between items-center px-4">
        <p className="font-semibold text-sm  text-[#8e8e8e]">
          Suggestions For You
        </p>
        <p className="text-[12px]">See All</p>
      </div>
      <div className="py-4 flex flex-col gap-y-2 px-4">
        {suggestions.map((person) => {
          return (
            <div className="flex justify-between items-center ">
              <div className="flex gap-x-3 items-end">
                <img
                  src={person.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <h6 className="text-sm font-semibold">{person.name}</h6>
                  <p className="text-[12px] text-[#8e8e8e]">
                    Followed by {person.followed} + 10 more
                  </p>
                </div>
              </div>
              <div>
                <button className="text-brand text-[12px] font-semibold">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggestions;
