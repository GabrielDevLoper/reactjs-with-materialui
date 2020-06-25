import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

toast.configure();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storedUserName = localStorage.getItem("@ManagerAuth:userName");
      const storagedUser = localStorage.getItem("@ManagerAuth:user");
      const storagedToken = localStorage.getItem("@ManagerAuth:token");

      if (storagedUser && storagedToken) {
        setUser(storagedUser);
        setUserName(storedUserName);
        setLoading(true);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(data) {
    const { email, password } = data;

    const responseData = await api.post("/sessions", {
      email,
      password,
    });

    const { token, message } = responseData.data;

    const response = await api.get("/authenticated", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    const { name, email: emails } = response.data;
    setUserName(name);
    setUser(emails);

    if (message) {
      toast.error(`❌ ${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return message;
    }

    localStorage.setItem("@ManagerAuth:userName", name);
    localStorage.setItem("@ManagerAuth:user", emails);
    localStorage.setItem("@ManagerAuth:token", token);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signIn, loading, user, userName, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
