import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Icon from "../components/Icon";

const Explore = () => {
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
        "https://img.redbull.com/images/c_crop,x_910,y_0,h_2133,w_1600/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2020/2/18/dhyqlva7ckbqpmgnpq8e/f1",
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
    <div>
      <div
        className="
      grid grid-cols-3 grid-flow-row gap-3"
      >
        {images.map((img, id) => {
          return (
            <div
              key={id}
              className="relative z-0 justify-center items-center flex"
            >
              <img src={img.image} alt="" className=" w-full  h-full" />
              <NavLink
                className="top-0 left-0 w-full h-full absolute hover:bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-white cursor-pointer group"
                to={`${id}`}
              >
                <div className="gap-x-6 font-semibold hidden group-hover:flex">
                  <div className="flex gap-x-2 items-center">
                    <Icon name="heart" color="white" filled="white" size={16} />
                    <p>303</p>
                  </div>
                  <div className="flex gap-x-2 items-center ">
                    <Icon
                      name="comment"
                      color="white"
                      filled="white"
                      size={16}
                    />
                    <p>25</p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Explore;
