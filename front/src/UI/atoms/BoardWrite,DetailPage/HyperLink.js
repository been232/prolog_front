import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export default function HyperLink(props) {
  const [text, setText] = React.useState("");

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  };

  React.useEffect(()=> {props.propFunction(text)}, [text])

  return (
    <Box style={{marginBottom: 20}}>
      <TextField
        variant="standard"
        placeholder="하이퍼 링크"
        fullWidth
        onChange={textChangeHandler}
        inputProps={{style: {fontFamily: "SUIT-Regular"}}}
      />
    </Box>
  );
}
