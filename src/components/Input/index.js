import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <InputMask defaultValue={defaultValue} inputRef={inputRef} {...rest}>
      <TextField {...rest} />
    </InputMask>
  );
}
