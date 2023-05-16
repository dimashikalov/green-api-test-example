import React from "react";
import "./authForm.css";
const AuthForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formWrapper">
      <h3>Login</h3>
      <form onSubmit={handleForm}>
        <div>
          <input placeholder="idInstance" />
        </div>
        <div>
          <input placeholder="apiTokenInstance" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
