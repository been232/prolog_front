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
      rows={data.data.height / 20}
      value={text}
      onChange={handleChange}
      inputProps={{
        style: {
          fontSize: 14,
          width: data.data.width,
          height: data.data.height,
          padding: '0 14px',
          fontWeight: 'bold',
          fontFamily: "KOTRAHOPE"
        },
      }}
    />
  );
};

export default Text;
