import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  const id = React.useId();

  function handleToastDismiss(index) {
    const newToasts = [...toasts];
    newToasts.splice(index, 1);
    setToasts(newToasts);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li className={styles.toastWrapper} key={`${id}-${index}`}>
          <Toast
            variant={toast.variant}
            dismiss={() => handleToastDismiss(index)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
