import React from "react";
import MessageItemTitle from "./MessageItemTitle";
import MessageItemList from "./MessageItemList";
import MessageItemInput from "./MessageItemInput";

const MessageItem = () => {
  return (
    <div>
      <MessageItemTitle />
      <MessageItemList />
      <MessageItemInput />
    </div>
  );
};

export default MessageItem;
