import classNames from "classnames";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

const ChatList = () => {
  const { conversationId } = useParams();

  const chats = [
    {
      id: 1,
      username: "Hasan",
      img: "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
      lastMessage: "Hello Hasan",
    },
    {
      id: 2,
      username: "Gökhan akdemir",
      img: "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
      lastMessage: "Yeni video",
      unread: true,
    },
    {
      id: 3,
      username: "Hasan",
      img: "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
      lastMessage: "Hello Hasan",
    },
  ];

  return (
    <div className="h-[calc(100%-60px)] overflow-auto  py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-bold">16 requests</button>
      </header>
      {chats.map((chat) => (
        <NavLink
          key={chat.id}
          to={`/inbox/${chat.id}`}
          className={classNames({
            "h-[72px] flex items-center gap-x-4 px-5": true,
            "font-semibold": chat.unread,
            "bg-[#efefef]": +conversationId === chat.id,
          })}
        >
          <img src={chat.img} className="w-14 h-14 rounded-full" alt="" />
          <div>
            <h6 className="text-sm font-semibold">{chat.username}</h6>
            <p className={`text-sm  ${!chat?.unread && "text-[#8e8e8e]"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ChatList;
