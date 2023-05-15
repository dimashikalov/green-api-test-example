import React from "react";
import ChatList from "../../components/ChatList/ChatList";
import MessageList from "../../components/MessageList/MessageList";
import "./chatList.css";

const ChatsPage = () => {
  return (
    <div className="chatListWrapper">
      <ChatList />
      <MessageList />
    </div>
  );
};

export default ChatsPage;
