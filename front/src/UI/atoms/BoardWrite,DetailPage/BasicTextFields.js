import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export default function BasicTextFields(props) {
  const [text, setText] = React.useState("");

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  };

  React.useEffect(()=> {props.propFunction(text)}, [text])

  return (
    <Box>
      <TextField
        variant="standard"
        placeholder="제목"
        sx={{ marginLeft: '5%' }}
        onChange={textChangeHandler}
        inputProps={{style: {fontFamily: "SUIT-Regular"}}}
      />
    </Box>
  );
}
