import React, { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import ChatsPage from "../ChatsPage/ChatsPage";

const MainPage = () => {
  const [isAuth, setIsAuth] = useState(false);
  const handleClick = () => setIsAuth((prev) => !isAuth);
  return (
    <div>
      <h3>MainPage</h3>
      <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
      {isAuth ? <LoginPage /> : <ChatsPage />}
    </div>
  );
};

export default MainPage;
