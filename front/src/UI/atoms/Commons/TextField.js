import React from 'react';
import TextField from '@mui/material/TextField';

export const AuthTextField = (props) => {
  const { id, name, autoComplete, label, onChange, value } = props;
  
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
      value={value}
    />
  );
};


export const SearchTextField = (props) => {
  const { style } = props;
  return <TextField sx={style}></TextField>;
};

