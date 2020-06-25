import React, { useState, createContext } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
