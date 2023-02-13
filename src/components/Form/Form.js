import React from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";

function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
