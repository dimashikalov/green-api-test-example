import React, { useContext, useState } from "react";
import "./search.css";
import { AuthContext } from "../../context/AuthContext";
import { addChat, getCurrentChat, setChatId } from "../../store/chatStore";
import { useDispatch } from "react-redux";

const validatePlusOrEightInNumber = (telNumber) => {
  if (telNumber.startsWith("+")) {
    return telNumber.slice(1);
  }
  if (telNumber.startsWith("8")) {
    return telNumber.replace("8", "7");
  }
  return telNumber;
};

const Search = ({ checkChat }) => {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  // const { setChatId } = useContext(ChatContext);
  const dispatch = useDispatch();

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

    // let checkWhatsapp = await checkTelNumber(
    //   idInstance,
    //   apiTokenInstance,
    //   validateTelNumber
    // );

    // return checkWhatsapp
    //   ? addNewChat(validateTelNumber, value)
    //   : setErrorText("Этот номер не имеет Whatsapp аккаунта");

    return addNewChat(validateTelNumber, value);
  };

  const addNewChat = (telNumber, value) => {
    const newChat = {
      chatId: `${telNumber}@c.us`,
      title: value,
      messages: [],
    };
    if (!checkChat(newChat.chatId)) {
      dispatch(addChat(newChat));
      dispatch(setChatId(newChat.chatId));
      dispatch(getCurrentChat(newChat.chatId));
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
