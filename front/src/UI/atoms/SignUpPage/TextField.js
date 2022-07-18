import React from 'react';
import TextField from '@mui/material/TextField';

const SignUpTextField = (props) => {
  const label = props.label;

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label={label}
      name="email"
      autoComplete="email"
      autoFocus
    />
  );
};

export default SignUpTextField;
