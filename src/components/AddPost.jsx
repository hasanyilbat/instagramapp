import React from "react";
import Icon from "./Icon";

const AddPost = ({ setModalOpen }) => {
  const handleClose = (e) => {
    if (e.target.id === "container") {
      setModalOpen(false);
    }
  };
  return (
    <div className="relative z-10">
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
        id="container"
        onClick={handleClose}
      >
        <div>
          <div className="absolute top-0 right-0 p-4">
            <button onClick={() => setModalOpen(false)}>
              <Icon name="exit" />
            </button>
          </div>
          <div className="h-[42px] bg-white border border-b-gray-300 flex items-center justify-center font-semibold text-base text-[#262626] rounded-t-2xl">
            Create new post
          </div>
          <div className="min-h-[200px] h-[600px]  w-[648px] bg-white flex flex-col items-center justify-center gap-y-4 rounded-b-2xl ">
            <Icon name="photosVideos" size={96} />
            <p className="text-[22px] font-thin">Drag photos and videos here</p>
            <button className="bg-brand text-white fon text-sm px-[9px] py-[5px] rounded-md font-semibold">
              Select from computer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
