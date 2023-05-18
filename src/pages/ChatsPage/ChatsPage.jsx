import React, { useEffect } from "react";
import ChatList from "../../components/ChatList/ChatList";
import MessageList from "../../components/MessageList/MessageList";
import "./chatPage.css";

const ChatsPage = () => {


  return (
    <div className="chatPageWrapper">
      <ChatList />
      <MessageList />
    </div>
  );
};

export default ChatsPage;
