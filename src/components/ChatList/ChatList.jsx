import React, { useContext, useState } from "react";
import Search from "../Search/Search";
import { ChatContext } from "../../context/ChatContext";
import ChatItem from "../ChatItem/ChatItem";
import { useSelector } from "react-redux";

const ChatList = () => {
  // const { chatList, setChatList } = useContext(ChatContext);
  const { chatList } = useSelector((state) => state.chats);
  // const addChat = (chat) => {
  //   setChatList([...chatList, chat]);
  // };

  const checkChat = (id) => {
    return chatList.find((chat) => chat.chatId === id);
  };

  return (
    <div className="chatListWrapper">
      <Search checkChat={checkChat} />
      <div>
        {chatList &&
          chatList.map((chat) => <ChatItem chat={chat} key={chat.chatId} />)}
      </div>
    </div>
  );
};

export default ChatList;
