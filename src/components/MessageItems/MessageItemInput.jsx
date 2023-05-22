import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendMessageInWhatsUpp } from "../../api/sendMessageInWhatsupp";
import { ChatContext } from "../../context/ChatContext";
import { getMessagesInChat } from "../../api/getMessagesInChat";
import { addMessageInChat } from "../../store/chatStore";
import { useDispatch } from "react-redux";

const MessageItemInput = ({ chatId }) => {
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  // const { addMessageInChat } = useContext(ChatContext);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

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
      let action = { chatId, newMessage };

      dispatch(addMessageInChat(action));
      setValue("");
    }
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
