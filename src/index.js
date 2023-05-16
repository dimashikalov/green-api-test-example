import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthDataProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthDataProvider>
);
