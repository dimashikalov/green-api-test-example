import React, { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import ChatsPage from "../ChatsPage/ChatsPage";
import "./mainPage.css";

const MainPage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const handleClick = () => setIsAuth((prev) => !isAuth);
  return (
    <div className="wrapper">
      <div>
        <h3>MainPage</h3>
        <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
      </div>

      {isAuth ? <LoginPage /> : <ChatsPage />}
    </div>
  );
};

export default MainPage;
