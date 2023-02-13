import React from "react";

import Button from "../Button";
import TextArea from "../TextArea/TextArea";
import ToastVariants from "../ToastVariants/ToastVariants";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id={"message"}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <ToastVariants
            variants={VARIANT_OPTIONS}
            variant={variant}
            setVariant={setVariant}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
