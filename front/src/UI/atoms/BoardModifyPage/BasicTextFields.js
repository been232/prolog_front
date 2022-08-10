import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export default function BasicTextFields(props) {
  const [text, setText] = React.useState(props.data.data.post.title);

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  };

  React.useEffect(()=> {props.propFunction(text)}, [text])

  return (
    <Box>
      <TextField
        variant="standard"
        placeholder="제목"
        defaultValue={text}
        sx={{ marginLeft: '5%' }}
        onChange={textChangeHandler}
        inputProps={{style: {fontFamily: "SUIT-Regular"}}}
      />
    </Box>
  );
}
