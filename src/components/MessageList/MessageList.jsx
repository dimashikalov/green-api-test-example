import React, { useContext, useEffect } from "react";
import "./messageList.css";
import MessageItemTitle from "../MessageItems/MessageItemTitle";
import MessageItemList from "../MessageItems/MessageItemList";
import MessageItemInput from "../MessageItems/MessageItemInput";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { getMessagesInChat } from "../../api/getMessagesInChat";

const MessageList = () => {
  const { currentChat, addMessageInChat } = useContext(ChatContext);
  const { idInstance, apiTokenInstance } = useContext(AuthContext);

  const getMessages = async () => {
    let messages = await getMessagesInChat(
      idInstance,
      apiTokenInstance,
      currentChat.chatId
    );

    await addMessageInChat(currentChat.chatId, messages);
  };

  useEffect(() => {
    if (currentChat) {
      getMessages();
    }
  }, [currentChat]);

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
