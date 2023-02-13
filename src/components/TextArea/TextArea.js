import React from "react";
import styles from "./TextArea.module.css";

function TextArea({ value, onChange, className = "", id, ...props }) {
  return (
    <>
      <label
        htmlFor={id}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default TextArea;
