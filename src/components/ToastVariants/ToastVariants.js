import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import styles from "./ToastVariants.module.css";

function ToastVariants({ variants, variant, setVariant }) {
  return variants.map((option, index) => (
    // <div
    //   className={`${styles.inputWrapper} ${styles.radioWrapper}`}
    //   key={index}
    // >
    //   <label htmlFor={`variant-${index}`}>
    //     <input
    //       id={`variant-${index}`}
    //       type="radio"
    //       name="variant"
    //       value={option}
    //       checked={option === variant}
    //       onChange={(e) => setVariants(e.target.value)}
    //     />
    //     {option}
    //   </label>
    // </div>
    <RadioButton
      id={`variant-${index}`}
      name="variant"
      value={option}
      checked={option === variant}
      onChange={(e) => setVariant(e.target.value)}
      label={option}
      key={`variant-${index}`}
    />
  ));
}

export default ToastVariants;
