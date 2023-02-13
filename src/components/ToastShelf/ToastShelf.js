import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const id = React.useId();
  const { toasts, dismissToasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        <li className={styles.toastWrapper} key={`${id}-${index}`}>
          <Toast variant={toast.variant} dismiss={() => dismissToasts(index)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
