import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages }) => {
  return (
    <ScrollToBottom className="h-[calc(100%-144px)] px-4 overflow-auto  mb-0 messages-box">
      <div className="mb-auto"></div>
      {messages.map((message, key) => (
        <Message message={message} key={key} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
