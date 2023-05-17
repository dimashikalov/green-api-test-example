import { createContext, useEffect, useRef, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);
  const [chatId, setChatId] = useState("");

  const currentChat = useRef();

  useEffect(() => {
    chatList.filter((chat) => {
      if (chat.chatId === chatId) {
        currentChat.current = chat;
        console.log(currentChat);
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
