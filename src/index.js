import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthContext } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext.Provider value={AuthContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContext.Provider>
);
