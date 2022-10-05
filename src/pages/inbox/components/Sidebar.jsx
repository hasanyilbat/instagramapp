import React from "react";
import { useSelector } from "react-redux";
import Icon from "../../../components/Icon";
import ChatList from "./ChatList";

const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <aside className="w-[349px] flex-shrink-0 border-r border-gray-300">
      <header className="h-[60px] border-b border-gray-300 flex justify-between items-center px-5">
        <button className="flex items-center mx-auto gap-x-3 font-semibold text-base">
          {user.username}
          <Icon name="chevron-down" size={20} className="rotate-180 " />
        </button>
        <Icon name="new-message" size={24} />
      </header>
      <ChatList />
    </aside>
  );
};

export default Sidebar;
