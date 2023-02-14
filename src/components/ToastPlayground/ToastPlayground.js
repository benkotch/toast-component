import React from "react";

import Button from "../Button";
import TextArea from "../TextArea/TextArea";

import ToastVariants from "../ToastVariants/ToastVariants";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";
import Form from "../Form/Form";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");

  const { createToast } = React.useContext(ToastContext);

  function handleToastSubmit(e) {
    e.preventDefault();
    if (!message) {
      alert("Please enter a message to show in the toast");
      return;
    }

    createToast(message, variant);

    setMessage("");
    setVariant("notice");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <Form onSubmit={handleToastSubmit}>
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
      </Form>
    </div>
  );
}

export default ToastPlayground;
