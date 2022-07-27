import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export default function HyperLink(props) {
  const [text, setText] = React.useState(props.data.content);

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  };

  React.useEffect(()=> {props.propFunction(text)}, [text])

  return (
      <TextField
        variant="standard"
        placeholder="하이퍼 링크"
        fullWidth
        value={text}
        onChange={textChangeHandler}
    />
  );
}
