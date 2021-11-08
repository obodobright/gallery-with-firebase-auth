import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { fireAuth } from "./firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      setCurrentUser(user);
    });
  });
  return (
    <AuthContext.Provider value={{ mgs: "hello you are the ", currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
