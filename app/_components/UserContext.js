"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserContextProvider({
  children,
  initialUserToken,
  initialUserData,
}) {
  const [userToken, setUserToken] = useState(initialUserToken);
  const [userData, setUserData] = useState(initialUserData);

  const  updateUser = (token, data) => {
    setUserToken(token);
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userToken, userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
