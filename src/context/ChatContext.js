import { createContext, useEffect, useRef, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);
  const [chatId, setChatId] = useState("");

  const [currentChat, setCurrentChat] = useState();

  useEffect(() => {
    chatList.filter((chat) => {
      if (chat.chatId === chatId) {
        setCurrentChat(chat);
        console.log("cr", currentChat);
      }
    });
  }, [chatId]);

  return (
    <ChatContext.Provider
      value={{ chatList, setChatList, chatId, setChatId, currentChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
// chat ={
//     chatId,
//     title,
//     messages: []
// }

// message= {
//     author,
//     message,
// chatId
// }
