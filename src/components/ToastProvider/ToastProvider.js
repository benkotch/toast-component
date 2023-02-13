import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function dismissToasts(index) {
    if (index === "all") {
      setToasts([]);
      return;
    }
    const newToasts = [...toasts];
    newToasts.splice(index, 1);
    setToasts(newToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, setToasts, dismissToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
