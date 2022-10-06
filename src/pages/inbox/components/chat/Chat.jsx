import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Reply from "./components/Reply";

const Chat = () => {
  const user = {
    name: "Hasan YILBAT",
    avatar:
      "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: "fx8Etnzf0rbI9DNv6BNqN0lShRd2",
        name: "Hasan Yılbat",
        username: "hasan",
        avatar:
          "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
      },
      message: "selam",
    },
    {
      from: {
        id: "fx8Etnzf0rbI9DNfx8Etnzf0rbI9DNv6BNqN0lShRd2v6BNqN0lShRd2",
        name: "Hasan Yılbat",
        username: "hasanyilbat",
        avatar:
          "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
      },
      message: "Merhaba",
    },
    {
      from: {
        id: "fx8Etnzf0rbI9DNv6BNqN0lShRd2",
        name: "Hasan Yılbat",
        username: "hasan",
        avatar:
          "https://pbs.twimg.com/profile_images/476768843642445825/etM5gVLi_400x400.jpeg",
      },
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis, ut eveniet rerum culpa nisi quod? Quae nihil ad recusandae. ",
    },
  ]);
  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} />
      <Reply setMessages={setMessages} />
    </div>
  );
};

export default Chat;
