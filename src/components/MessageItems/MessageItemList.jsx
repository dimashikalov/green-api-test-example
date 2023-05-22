import React from "react";
import "./messageItem.css";

const MessageItemList = ({ messages }) => {
  console.log("mews", messages);
  return (
    <div className="messageItemListWrapper">
      {messages &&
        messages.map((item) => (
          <div
            className={`message ${item.type === "incoming" ? "incoming" : ""}`}
            key={item.idMessage}
          >
            {item.textMessage}
          </div>
        ))}
    </div>
  );
};

export default MessageItemList;
