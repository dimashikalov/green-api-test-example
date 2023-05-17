import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthDataProvider from "./context/AuthContext";
import ChatContextProvider from "./context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthDataProvider>
    <ChatContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChatContextProvider>
  </AuthDataProvider>
);
