import React, { useState } from "react";
import Icon from "../../../../../components/Icon";

const Reply = ({ setMessages }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...messages,
      {
        from: {
          id: "fx8Etnzf0rbI9DNv6BNqN0lShRd2",
          name: "Hasan Yılbat",
          username: "hasan",
          avatar:
            "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
        },
        message,
      },
    ]);
    setMessage("");
  };

  return (
    <footer className="h-[84px] flex items-center px-6">
      <form
        onSubmit={sendMessage}
        className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]"
      >
        <button
          type="button"
          className="w-[40px] h-[42px] flex items-center justify-center"
        >
          <Icon name="emoji" size={24} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 outline-none px-[9px] placeholder:text-gray-500 focus:placeholder:text-gray-300 "
          placeholder="Message..."
        />
        {!message && (
          <>
            <button
              type="button"
              className="w-[40px] h-[42px] flex items-center justify-center"
            >
              <Icon name="picture" size={24} />
            </button>
            <button
              type="button"
              className="w-[40px] h-[42px] flex items-center justify-center"
            >
              <Icon name="heart" size={24} />
            </button>
          </>
        )}
        {message && (
          <>
            <button
              type="submit"
              className="text-brand text-sm font-semibold px-3"
            >
              Send
            </button>
          </>
        )}
      </form>
    </footer>
  );
};

export default Reply;
