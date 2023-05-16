import React, { useContext, useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import ChatsPage from "../ChatsPage/ChatsPage";
import "./mainPage.css";
import { AuthContext } from "../../context/AuthContext";

const MainPage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="wrapper">{isAuth ? <ChatsPage /> : <LoginPage />}</div>
  );
};

export default MainPage;
