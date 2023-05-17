import React, { useContext } from "react";
import "./messageList.css";
import MessageItemTitle from "../MessageItems/MessageItemTitle";
import MessageItemList from "../MessageItems/MessageItemList";
import MessageItemInput from "../MessageItems/MessageItemInput";
import { ChatContext } from "../../context/ChatContext";

const MessageList = () => {
  const { currentChat } = useContext(ChatContext);
  console.log("ml", currentChat);

  const messageRender = () => {
    return (
      <>
        <MessageItemTitle title={currentChat.title} />
        <MessageItemList messages={currentChat.messages} />
        <MessageItemInput chatId={currentChat.chatId} />
      </>
    );
  };
  return (
    <div className="messageListWrapper">
      {!currentChat && <h4>Выберите чат</h4>}
      {currentChat && messageRender()}
    </div>
  );
};

export default MessageList;
