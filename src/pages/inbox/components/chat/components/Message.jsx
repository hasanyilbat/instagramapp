import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div
      className={classNames({
        "flex gap-x-2 max-w-[50%] ": true,
        "self-end": user.uid === message.from.id,
      })}
    >
      {user.uid !== message.from.id && (
        <img
          src={message.from.avatar}
          className="w-6 h-6 rounded-full self-end mb-1"
          alt=""
        />
      )}
      <p
        style={{ hyphens: "auto" }}
        className={classNames({
          "min-h-[44px] rounded-3xl  flex items-center px-4 py-3 text-sm": true,
          "border border-gray-200": user.uid !== message.from.id,
          "bg-[#efefef]": user.uid === message.from.id,
        })}
      >
        {message.message}
      </p>
    </div>
  );
};

export default Message;
