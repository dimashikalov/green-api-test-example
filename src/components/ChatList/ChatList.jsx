import React, { useContext } from "react";
import Search from "../Search/Search";
import { ChatContext } from "../../context/ChatContext";

const ChatList = () => {
  const { chatList, setChatList } = useContext(ChatContext);

  const addChat = (chat) => {
    setChatList([...chatList, chat]);
  };

  const checkChat = (id) => {
    return chatList.find((chat) => chat.chatId === id);
  };

  console.log("ch", chatList);
  return (
    <div className="chatListWrapper">
      <Search addChat={addChat} checkChat={checkChat} />
      <div>
        {chatList &&
          chatList.map((chat) => (
            <div key={chat.chatId}>
              <h6>{chat.title}</h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatList;
