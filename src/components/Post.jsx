import React, { useState } from "react";
import Icon from "./Icon";

const Post = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="mt-5 w-[470px] border border-gray-300 rounded-md">
      <div className="h-[52px]  flex items-center justify-between px-4 ">
        <div className="flex items-center gap-x-3 cursor-pointer">
          <img
            src="https://pbs.twimg.com/profile_images/1510909017996111880/Yj6olIie_400x400.jpg"
            alt=""
            className="w-8 h-8 ring-2 rounded-full ring-offset-1  ring-red-700"
          />
          <div>
            <h6 className="font-semibold text-sm">f1</h6>
            <p className="text-[12px]">Suzuka, Mie</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <Icon name="threeDot" size={24} />
        </div>
      </div>
      <div className=" w-full">
        <img
          src="https://pbs.twimg.com/media/FecJSUSXwAQVAkO?format=jpg&name=medium"
          alt=""
        />
      </div>
      <div className="max-h-[225px] w-full p-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-4">
            <button>
              <Icon name="heart" size={24} />
            </button>
            <button>
              <Icon name="comment" size={24} />
            </button>
            <button>
              <Icon name="sendPost" size={24} />
            </button>
          </div>
          <div>
            <button>
              <Icon name="save" size={24} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <p className="text-sm font-semibold cursor-pointer"> 855.138 views</p>
          <p className="text-sm">
            <span className="font-semibold">f1 </span>
            Getting soaked at 鈴鹿サーキット 🌧🇯🇵
          </p>
          <p className="text-sm text-[#8e8e8e] cursor-pointer">
            View all 353 comments
          </p>
          <p className="text-[10px] text-[#8e8e8e]">1 DAY AGO</p>
          <form className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
            <button
              type="button"
              className="w-[40px] h-[42px] flex items-center justify-center"
            >
              <Icon name="emoji" size={24} />
            </button>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 outline-none px-[9px] placeholder:text-[#8e8e8e]  "
              placeholder="Add a comment..."
            />

            <button
              disabled={comment ? "" : "null"}
              className="text-brand font-semibold text-sm disabled:opacity-50"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
