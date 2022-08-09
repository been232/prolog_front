import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const Text = (props) => {
  const data = props;
  const [text, setText] = useState(data.data.content);
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    data.data.content = text
  }, [text]);

  return (
    <TextField
    multiline
    rows={(data.data.height-20) / 25}
    value={text}
    onChange={handleChange}
    style={{width: data.data.width}}
    inputProps={{
      sx: { height: data.data.height-30 },
      style: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: "SUIT-Regular"
      },
    }}
    />
  );
};

export default Text;
