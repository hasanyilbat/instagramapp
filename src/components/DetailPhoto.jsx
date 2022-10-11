import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "./Icon";

const DetailPhoto = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const images = [
    {
      id: 1,
      image:
        "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/9/21/r3ovmu7379tsjjih8cnj/f1-turkiye-gp-programi",
    },
    {
      id: 2,
      image:
        "https://cdn-1.motorsport.com/images/amp/YMdQdX12/s1000/formula-1-bahrain-gp-2022-nico-2.jpg",
    },
    {
      id: 3,
      image:
        "https://cdn-1.motorsport.com/images/amp/YMdnLbK2/s1000/aston-martin-racing-amr22-1.jpg",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OTPOpZnlC95NyAb442qt90NpUhlbf0xkAjReysB-NEK5ooUYYpIi1dHV8pxwHFafzc8&usqp=CAU",
    },
    {
      id: 5,
      image:
        "https://cdn-1.motorsport.com/images/amp/0a9nWep0/s1000/red-bull-racing-rb18-1.jpg",
    },
    {
      id: 6,
      image:
        "https://static.cedscdn.it/photos/MED_HIGH/40/97/6214097_1553_xpb_1109554_hires.jpg",
    },
    {
      id: 7,
      image:
        "https://cdn-1.motorsport.com/images/amp/YMdLMdm2/s1000/carlos-sainz-ferrari-f1-75-lew.jpg",
    },
    {
      id: 8,
      image:
        "https://cdn-1.motorsport.com/images/amp/0k78vWA0/s1000/lewis-hamilton-mercedes-w13-ba.jpg",
    },
    {
      id: 9,
      image:
        "https://cdn-1.motorsport.com/images/amp/0k7Evaq0/s1000/f1-2022-screenshot-1.jpg",
    },
    {
      id: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPGMkBlxapX595h0-KdQ8CBS6uHe_C_-8rLFZdyFanqKKDEs8fngV0Qkp_x4hcHlLklw&usqp=CAU",
    },
    {
      id: 11,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPGMkBlxapX595h0-KdQ8CBS6uHe_C_-8rLFZdyFanqKKDEs8fngV0Qkp_x4hcHlLklw&usqp=CAU",
    },
  ];

  return (
    <div className="flex items-center bg-black">
      <div className="h-[580px] w-[500px] flex justify-center items-center bg-black">
        <img src={images[id].image} alt="" className="" />
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
