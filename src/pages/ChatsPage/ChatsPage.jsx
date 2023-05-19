import React, { useContext, useEffect } from "react";
import ChatList from "../../components/ChatList/ChatList";
import MessageList from "../../components/MessageList/MessageList";
import "./chatPage.css";
import { getNotifications } from "../../api/getNotifications";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { deleteNotifications } from "../../api/deleteNotifications";

const ChatsPage = () => {
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  const { chatId, addMessageInChat } = useContext(ChatContext);

  const getMessagesFromNotifications = async () => {
    let res = await getNotifications(idInstance, apiTokenInstance);
    console.log("re1", res);
    if (res !== null) {
      if (res.body.typeWebhook === "incomingMessageReceived") {
        let newMessage = {
          idMessage: res.body.idMessage,
          textMessage: res.body.messageData.textMessageData.textMessage,
          type: "incoming",
          timestamp: res.body.timestamp,
        };

        console.log("answ", newMessage);
        addMessageInChat(chatId, newMessage);
      }

      console.log("re2", res);
      let deleteSuccess = await deleteNotifications(
        idInstance,
        apiTokenInstance,
        res.receiptId
      );

      getMessagesFromNotifications();
      console.log("del", deleteSuccess);
    }

    return;
  };

  useEffect(() => {
    // getNotifications(idInstance, apiTokenInstance);
    getMessagesFromNotifications();
  }, []);

  return (
    <div className="chatPageWrapper">
      <ChatList />
      <MessageList />
    </div>
  );
};

export default ChatsPage;
