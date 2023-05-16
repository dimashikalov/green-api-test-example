import React, { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import ChatsPage from "../ChatsPage/ChatsPage";
import "./mainPage.css";

const MainPage = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="wrapper">{isAuth ? <LoginPage /> : <ChatsPage />}</div>
  );
};

export default MainPage;
