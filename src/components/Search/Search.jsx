import React, { useContext, useState } from "react";
import "./search.css";
import { checkTelNumber } from "../../api/checkTelNumber";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const validatePlusOrEightInNumber = (telNumber) => {
  if (telNumber.startsWith("+")) {
    return telNumber.slice(1);
  }
  if (telNumber.startsWith("8")) {
    return telNumber.replace("8", "7");
  }
  return telNumber;
};

const Search = ({ addChat, checkChat }) => {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  const { setChatId } = useContext(ChatContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCheckAndAddChat = async () => {
    setErrorText("");

    if (!Number(value)) {
      return setErrorText("Неправильно написанный номер телефона");
    }

    if (value.length < 11 || value.length > 12) {
      return setErrorText("Номер телефона имеет неправильную длинну");
    }

    const validateTelNumber = validatePlusOrEightInNumber(value);

    let checkWhatsapp = await checkTelNumber(
      idInstance,
      apiTokenInstance,
      validateTelNumber
    );

    return checkWhatsapp
      ? addNewChat(validateTelNumber, value)
      : setErrorText("Этот номер не имеет Whatsapp аккаунта");
  };

  const addNewChat = (telNumber, value) => {
    const newChat = {
      chatId: `${telNumber}@c.us`,
      title: value,
      messages: [],
    };
    if (!checkChat(newChat.chatId)) {
      addChat(newChat);
      setChatId(newChat.chatId);
      setValue("");
    } else {
      return setErrorText("Чат уже существует");
    }
  };

  return (
    <div className="searchWrapper">
      <input
        className="searchInput"
        value={value}
        onChange={handleChange}
        type="text"
      />
      <button className="searchButton" onClick={handleCheckAndAddChat}>
        Add Chat
      </button>
      {errorText && <h4>{errorText}</h4>}
    </div>
  );
};

export default Search;
