import React from 'react';
import TextField from '@mui/material/TextField';

const LoginTextField = (props) => {
    const label = props.label;

    return (
            <TextField
                margin="normal"
                required
                fullWidth
                id={label}
                label={label}
                name={label}
                autoComplete={label}
                autoFocus
            />
    );
}

export default LoginTextField