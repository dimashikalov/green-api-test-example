import React, { useContext } from "react";
import "./chatItem.css";
import { getCurrentChat, setChatId } from "../../store/chatStore";
import { useDispatch } from "react-redux";
// import { ChatContext } from "../../context/ChatContext";

const ChatItem = ({ chat }) => {
  // const { setChatId } = useContext(ChatContext);
  const dispatch = useDispatch();

  const handleClickChatId = () => {
    dispatch(getCurrentChat(chat.chatId));
  };

  return (
    <div key={chat.chatId} className="chatItemWrapper">
      <h6 onClick={handleClickChatId}>{chat.title}</h6>
    </div>
  );
};

export default ChatItem;
