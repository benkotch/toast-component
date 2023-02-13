import React from "react";
import RadioButton from "../RadioButton/RadioButton";

function ToastVariants({ variants, variant, setVariant }) {
  return variants.map((option, index) => (
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
