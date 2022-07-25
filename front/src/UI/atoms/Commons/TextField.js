import React from 'react';
import TextField from '@mui/material/TextField';

export const AuthTextField = (props) => {
  const { id, name, autoComplete, label, onChange } = props;
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus
      onChange={onChange}
    />
  );
};

export const SearchTextField = (props) => {
  const { style } = props;
  return <TextField sx={style}></TextField>;
};
