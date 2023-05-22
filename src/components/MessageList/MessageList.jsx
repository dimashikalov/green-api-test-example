import React, { useContext, useEffect, useState } from "react";
import "./messageList.css";
import MessageItemTitle from "../MessageItems/MessageItemTitle";
import MessageItemList from "../MessageItems/MessageItemList";
import MessageItemInput from "../MessageItems/MessageItemInput";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";

const MessageList = () => {
  // const { currentChat } = useContext(ChatContext);
  const { currentChat, chatList } = useSelector((state) => state.chats);
  const [showList, setShowList] = useState([]);

  const showCurrentMessageList = () => {
    setShowList(chatList.find((chat) => chat.chatId === currentChat.chatId));
  };

  useEffect(() => {
    showCurrentMessageList();
  }, [chatList]);

  console.log("cur", currentChat);
  console.log("chl", chatList);
  console.log("showList", showList);

  const messageRender = () => {
    return (
      <>
        <MessageItemTitle title={currentChat.title} />
        <MessageItemList messages={showList ? showList.messages : []} />
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
