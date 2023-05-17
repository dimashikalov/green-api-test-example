import React, { useContext } from "react";
import Search from "../Search/Search";
import { ChatContext } from "../../context/ChatContext";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = () => {
  const { chatList, setChatList } = useContext(ChatContext);

  const addChat = (chat) => {
    setChatList([...chatList, chat]);
  };

  const checkChat = (id) => {
    return chatList.find((chat) => chat.chatId === id);
  };

  return (
    <div className="chatListWrapper">
      <Search addChat={addChat} checkChat={checkChat} />
      <div>{chatList && chatList.map((chat) => <ChatItem chat={chat} />)}</div>
    </div>
  );
};

export default ChatList;
