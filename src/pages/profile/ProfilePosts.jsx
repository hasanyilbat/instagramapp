import React from "react";
import Icon from "../../components/Icon";

const ProfilePosts = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center flex-col gap-4 pt-10">
        <div className="w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center">
          <Icon name="post" size={40} />
        </div>
        <div>
          <h6 className="text-[28px] font-light">No Post yet</h6>
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
