import React from "react";

const MessageItemInput = ({ chatid }) => {
  return (
    <div className="messageItemInputWrapper">
      <input className="messageInput" />
      <button className="messageButton">Add</button>
    </div>
  );
};

export default MessageItemInput;
