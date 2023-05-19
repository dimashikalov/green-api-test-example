import React from "react";

const MessageItemList = ({ messages }) => {
  console.log("mews", messages);
  return (
    <div className="messageItemListWrapper">
      {messages.map((item) => (
        <div key={item.idMessage}>{item.textMessage}</div>
      ))}
    </div>
  );
};

export default MessageItemList;
