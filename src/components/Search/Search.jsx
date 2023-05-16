import React, { useContext, useState } from "react";
import "./search.css";
import { checkTelNumber } from "../../api/checkTelNumber";
import { AuthContext } from "../../context/AuthContext";

const validatePlusInNumber = (telNumber) => {
  if (telNumber.startsWith("+")) {
    return telNumber.slice(1);
  }
  return telNumber;
};

const Search = () => {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const { idInstance, apiTokenInstance } = useContext(AuthContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCheckAndAddChat = () => {
    setErrorText("");
    if (!Number(value)) {
      return setErrorText("Неправильно написанный номер телефона");
    }
    console.log(value.length);
    if (value.length < 11 || value.length > 12) {
      return setErrorText("Номер телефона имеет неправильную длинну");
    }
    const validateTelNumber = validatePlusInNumber(value);
    console.log("vvv", validateTelNumber);
    checkTelNumber(idInstance, apiTokenInstance, validateTelNumber);
  };

  return (
    <div>
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
