import React from "react";
import "./messageList.css";
import MessageItem from "../MessageItems/MessageItem";

const MessageList = () => {
  return (
    <div className="messageListWrapper">
      <MessageItem />
    </div>
  );
};

export default MessageList;
