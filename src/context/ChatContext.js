import { createContext, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);
  const [chatId, setChatId] = useState("");

  console.log("cl", chatList);
  return (
    <ChatContext.Provider value={{ chatList, setChatList, chatId, setChatId }}>
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
