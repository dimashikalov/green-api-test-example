import { createContext, useState } from "react";

// export const AuthContext = createContext({
//   idInstance: "",
//   apiTokenInstance: "",
//   isAuth: false,
// });

export const AuthContext = createContext();

const AuthDataProvider = ({ children }) => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        idInstance,
        setIdInstance,
        apiTokenInstance,
        setApiTokenInstance,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthDataProvider;
