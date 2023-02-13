import React from "react";
import styles from "./RadioButton.module.css";
function RadioButton({ id, name, checked, value, onChange }) {
  return (
    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
      <label htmlFor={id}>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {value}
      </label>
    </div>
  );
}

export default RadioButton;
