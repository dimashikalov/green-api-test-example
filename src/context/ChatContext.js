import { createContext, useEffect, useRef, useState } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);
  const [chatId, setChatId] = useState("");

  const [currentChat, setCurrentChat] = useState();

  useEffect(() => {
    setCurrentChat(chatList.find((chat) => chat.chatId === chatId));
  }, [chatId]);

  const addMessageInChat = (chatId, message) => {
    let currentChatFind = chatList.find((chat) => chat.chatId === chatId);
    if (currentChatFind) {
      chatList.map((chat) => {
        if (chat.chatId === chatId) {
          chat.messages = [...chat.messages, message];
        }
        setChatList([...chatList]);
      });
    }
  };
  // const addMessageInChat = (chatId, messages) => {
  //   let currentChatFind = chatList.find((chat) => chat.chatId === chatId);
  //   if (currentChatFind) {
  //     chatList.map((chat) => {
  //       if (chat.chatId === chatId) {
  //         chat.messages = [...messages.reverse()];
  //         setChatList([...chatList]);
  //       }
  //     });
  //   }
  // };

  return (
    <ChatContext.Provider
      value={{
        chatList,
        setChatList,
        chatId,
        setChatId,
        currentChat,
        addMessageInChat,
      }}
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
