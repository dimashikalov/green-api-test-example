import React from "react";
import "./chatItem.css";

const ChatItem = ({ chat }) => {
  return (
    <div key={chat.chatId} className="chatItemWrapper">
      <h6>{chat.title}</h6>
    </div>
  );
};

export default ChatItem;
