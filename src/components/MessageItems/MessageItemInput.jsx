import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendMessageInWhatsUpp } from "../../api/sendMessageInWhatsupp";
import { ChatContext } from "../../context/ChatContext";

const MessageItemInput = ({ chatId }) => {
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  const { chatid, chatList } = useContext(ChatContext);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendMessage = async () => {
    await sendMessageInWhatsUpp(idInstance, apiTokenInstance, chatId, value);
    
    setValue("");
  };

  return (
    <div className="messageItemInputWrapper">
      <input className="messageInput" value={value} onChange={handleChange} />
      <button className="messageButton" onClick={sendMessage}>
        Add
      </button>
    </div>
  );
};

export default MessageItemInput;
