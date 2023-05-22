import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthDataProvider from "./context/AuthContext";
import ChatContextProvider from "./context/ChatContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthDataProvider>
    {/* <ChatContextProvider> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </ChatContextProvider> */}
  </AuthDataProvider>
);
