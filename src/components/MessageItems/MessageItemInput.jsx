import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendMessageInWhatsUpp } from "../../api/sendMessageInWhatsupp";
import { ChatContext } from "../../context/ChatContext";
import { getMessagesInChat } from "../../api/getMessagesInChat";

const MessageItemInput = ({ chatId }) => {
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  const { addMessageInChat } = useContext(ChatContext);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendMessage = async () => {
    let result = await sendMessageInWhatsUpp(
      idInstance,
      apiTokenInstance,
      chatId,
      value
    );
    if (result) {
      let newMessage = {
        idMessage: result,
        textMessage: value,
        type: "outgoing",
        timestamp: Date.now(),
      };

      addMessageInChat(chatId, newMessage);
      setValue("");
    }

    // setTimeout(() => {
    //   getMessagesInChat(idInstance, apiTokenInstance, chatId).then((result) => {
    //     addMessageInChat(chatId, result);
    //     setValue("");
    //   });
    // }, 1000);
  };

  return (
    <div className="messageItemInputWrapper">
      <input className="messageInput" value={value} onChange={handleChange} />
      <button className="messageButton" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageItemInput;
