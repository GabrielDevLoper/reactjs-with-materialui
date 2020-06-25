import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";

import { toast } from "react-toastify";

export const AuthContext = createContext();

toast.configure();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem("@ManagerAuth:user");
      const storagedToken = localStorage.getItem("@ManagerAuth:token");

      if (storagedUser && storagedToken) {
        setUser(storagedUser);
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

    setUser(response.data.email);

    if (message) {
      toast.error(`❌ ${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }

    localStorage.setItem("@ManagerAuth:user", response.data.email);
    localStorage.setItem("@ManagerAuth:token", token);

    if (response.data.email && token) {
      return `ok`;
    } else {
      return `error`;
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signIn, loading, user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
