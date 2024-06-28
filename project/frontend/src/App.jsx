import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import AuthContext from "./context/authContext";

export default function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const router = useRoutes(routes);

  const login = (userInfos, token) => {
    console.log("token", token);
    console.log("userInfos", userInfos);
    setToken(token);
    SetIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };
  // console.log("userInfos", userInfos);
  const logout = () => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        token: token,
        userInfos: userInfos,
        login: login,
        logout: logout,
      }}
    >
      <div>{router}</div>
    </AuthContext.Provider>
  );
}
