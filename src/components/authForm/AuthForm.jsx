import React, { useContext, useState } from "react";
import "./authForm.css";
import { AuthContext } from "../../context/AuthContext";
import { getAuthStatus, handlerStatus } from "../../api/getAuthStatus";

const AuthForm = () => {
  const { setIdInstance, setApiTokenInstance, setIsAuth } =
    useContext(AuthContext);
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const userStatus = await getAuthStatus(id, token);

    if (userStatus === "authorized") {
      setIdInstance(id);
      setApiTokenInstance(token);
      setIsAuth(true);
      return;
    }

    if (userStatus === "undefined") {
      setShowError(true);
      setErrorText("Неправильный idInstance или apiTokenInstance");
    }

    setErrorText(handlerStatus(userStatus));
    setShowError(true);
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

      {showError && <h3>{errorText}</h3>}
    </div>
  );
};

export default AuthForm;
