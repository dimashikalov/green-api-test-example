import React, { useContext } from "react";
import "./chatItem.css";
import { ChatContext } from "../../context/ChatContext";

const ChatItem = ({ chat }) => {
  const { setChatId } = useContext(ChatContext);

  const handleClickChatId = () => {
    setChatId(chat.chatId);
  };

  return (
    <div key={chat.chatId} className="chatItemWrapper">
      <h6 onClick={handleClickChatId}>{chat.title}</h6>
    </div>
  );
};

export default ChatItem;
