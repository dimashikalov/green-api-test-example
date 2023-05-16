import React, { useContext, useState } from "react";
import "./authForm.css";
import { AuthContext } from "../../context/AuthContext";
import { getAuthStatus } from "../../api/api";
const AuthForm = () => {
  const { idInstance, apiTokenInstance } = useContext(AuthContext);
  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      idInstance: id,
      apiTokenInstance: token,
    };

    getAuthStatus(formData.idInstance, formData.apiTokenInstance);
  };

  return (
    <div className="formWrapper">
      <h3>Login</h3>
      <form onSubmit={handleForm}>
        <div>
          <input
            placeholder="idInstance"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="apiTokenInstance"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
