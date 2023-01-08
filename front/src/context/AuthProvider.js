import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const inputShow = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const signIn = (newUser, cb) => {
    localStorage.setItem("newUser", newUser);
    setUser(localStorage.getItem("newUser"));
    cb();
  };
  const signOut = (cb) => {
    setUser(localStorage.clear());
    cb();
  };
  const value = { user, signIn, signOut, inputShow, details };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
