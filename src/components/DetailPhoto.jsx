import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const DetailPhoto = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center bg-black">
      <div className="absolute top-0 right-0 p-4">
        <button onClick={() => navigate(-1)}>
          <Icon name="exit" />
        </button>
      </div>
      <div className="h-[580px] w-[500px] flex items-center bg-black">
        <img
          src="https://cdn-1.motorsport.com/images/amp/0a9nWep0/s1000/red-bull-racing-rb18-1.jpg"
          alt=""
        />
      </div>
      <div className="w-[500px] h-[600px] bg-white rounded-md relative">
        <div className="flex items-center  p-4 justify-between">
          <div className="flex items-center gap-x-3">
            <img
              src="https://pbs.twimg.com/profile_images/1510909017996111880/Yj6olIie_400x400.jpg"
              alt=""
              className="w-8 h-8 ring-2 rounded-full ring-offset-1  ring-red-700"
            />
            <div className="flex gap-x-4 items-center">
              <h6 className="font-semibold text-sm ">f1</h6>
              <button className="text-sm text-brand font-semibold ">
                Follow
              </button>
            </div>
          </div>
          <div>
            <Icon name="threeDot" size={24} />
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-start  gap-x-3">
            <img
              src="https://pbs.twimg.com/profile_images/1510909017996111880/Yj6olIie_400x400.jpg"
              alt=""
              className="w-8 h-8 ring-2 rounded-full ring-offset-1  ring-red-700 mt-3"
            />
            <div>
              <p className="text-sm text-justify py-4 pr-4">
                {" "}
                <span className="font-semibold ">f1</span> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Cupiditate ad vero
                reprehenderit asperiores impedit iusto dolorum harum corrupti
                eos cum explicabo eum numquam molestiae molestias sunt,
                veritatis exercitationem aliquid unde magnam accusamus error
                qui! Odit, enim officiis voluptatem impedit ad tempore aut,
                eaque sit earum ea quod pariatur. Sequi, molestiae incidunt
                ipsam perferendis ipsa quos, hic magnam neque mollitia eius ut
                perspiciatis. Assumenda ea qui consectetur velit amet quisquam!
                In cupiditate sequi sed dicta, nemo iure eveniet aspernatur odio
                inventore, reiciendis soluta quasi asperiores reprehenderit,
                corporis optio itaque minus consectetur doloremque accusamus ad
                beatae! Quam cumque odit quis quo unde?
              </p>
              <p className="text-xs text-[#8e8e8e]">
                2d <button className="font-semibold">See Translations</button>{" "}
              </p>
              <div className="max-h-[225px] w-full py-3 pr-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-x-4">
                    <button>
                      <Icon name="heart" size={24} color="black" />
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
                  <p className=" cursor-pointer text-sm text-[#8e8e8e]">
                    View all 353 comments
                  </p>
                  <p className="text-[10px] text-[#8e8e8e]">1 DAY AGO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="h-[44px] border rounded-full flex items-center w-full px-3 mb-2 absolute bottom-0">
          <button
            type="button"
            className="w-[40px] h-[42px] flex items-center justify-center"
          >
            <Icon name="emoji" size={24} />
          </button>
          <input
            type="text"
            //   value={comment}
            //   onChange={(e) => setComment(e.target.value)}
            className="flex-1 outline-none placeholder:text-[#8e8e8e] w-full  "
            placeholder="Add a comment..."
          />

          <button
            //   disabled={comment ? "" : "null"}
            className="text-brand font-semibold text-sm disabled:opacity-50"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailPhoto;
