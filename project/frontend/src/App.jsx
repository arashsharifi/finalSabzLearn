import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import AuthContext from "./context/authContext";

export default function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const router = useRoutes(routes);

  const login = useCallback((userInfos, token) => {
    // console.log(token);
    // console.log(userInfos);
    setToken(token);
    SetIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      // console.log("arash");
      fetch("http://localhost:4000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          SetIsLoggedIn(true);
          setUserInfos(result);
        });
    }
  }, [token]);

  // console.log("userInfos", userInfos);
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
