import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const ClientContext = createContext();

export function ClientProvider({ children }) {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [countClients, setCountClients] = useState(0);

  return (
    <ClientContext.Provider
      value={{
        clients,
        page,
        setPage,
        countClients,
        setCountClients,
        setClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
