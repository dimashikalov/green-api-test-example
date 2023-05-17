import React, { useContext } from "react";
import "./messageList.css";
import MessageItemTitle from "../MessageItems/MessageItemTitle";
import MessageItemList from "../MessageItems/MessageItemList";
import MessageItemInput from "../MessageItems/MessageItemInput";
import { ChatContext } from "../../context/ChatContext";

const MessageList = () => {
  const { currentChat } = useContext(ChatContext);
  const chatCurrent = currentChat.current;
  return (
    <div className="messageListWrapper">
      <MessageItemTitle title={chatCurrent.title} />
      <MessageItemList messages={chatCurrent.messages} />
      <MessageItemInput chatId={chatCurrent.chatId} />
    </div>
  );
};

export default MessageList;
