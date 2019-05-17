import React from "react";
import TextField from "@material-ui/core/TextField";

const MaterialInput = ({
  field: { ...fields },
  form: { touched, errors },
  ...props
}: any) => {
  return (
    <TextField
      {...props}
      {...fields}
      error={Boolean(touched[fields.name] && errors[fields.name])}
      helperText={touched[fields.name] && errors[fields.name]}
    >
      {props.children}
    </TextField>
  );
};

export default MaterialInput;
