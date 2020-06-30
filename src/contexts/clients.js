import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const ClientContext = createContext();

export function ClientProvider({ children }) {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [countClients, setCountClients] = useState(0);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get(`/clients?page=${page}`);
      setCountClients(Number(response.headers["x-total-count"]));
      setClients(response.data);
    }

    loadClients();
  }, [page]);

  return (
    <ClientContext.Provider
      value={{ clients, page, setPage, countClients, setCountClients }}
    >
      {children}
    </ClientContext.Provider>
  );
}
