import React from "react";

const CarouselStory = () => {
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
    <div>
      <div className="flex h-[119px] items-center gap-x-2 overflow-auto px-1 w-[470px]">
        {suggestions.map((item) => {
          return (
            <div className="h-14 w-14">
              <img
                src={item.avatar}
                alt=""
                className="rounded-full ring-2 ring-offset-1 ring-pink-600"
              />
              <p className="text-xs">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselStory;
