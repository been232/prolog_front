import React from 'react';
import TextField from '@mui/material/TextField';

export const AuthTextField = (props) => {
  const { id, name, autoComplete, label, onChange, value, defaultValue, type } = props;

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
      defaultValue={defaultValue}
      type={type}
      style={{ fontFamily: "SUIT-Regular" }}
    />
  );
};

export const NonFocusTextField = (props) => {
  const { id, name, autoComplete, label, onChange, value, defaultValue, type } = props;

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      type={type}
      style={{ fontFamily: "SUIT-Regular" }}
    />
  );
};

export const SearchTextField = (props) => {
  const { style, onChange, name } = props;
  return (
    <TextField
      sx={style}
      onChange={onChange}
      name={name}
      autoComplete="off"
    ></TextField>
  );
};
