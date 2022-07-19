import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const ImageListText = (props) => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // data.data.content = text
  }, [text]);

  return (
    <TextField
      value={text}
      onChange={handleChange}
      inputProps={{
        style: {
          fontSize: 14,
          padding: '0 14px',
          fontWeight: 'bold',
        },
      }}
    />
  );
};

export default ImageListText;
