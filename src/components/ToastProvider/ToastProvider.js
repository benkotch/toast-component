import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    setToasts((toasts) => [...toasts, { message, variant }]);
  }

  function dismissToasts(index) {
    const newToasts = [...toasts];
    newToasts.splice(index, 1);
    setToasts(newToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
