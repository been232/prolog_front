import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const Text = (props) => {
  const data = props;
  const [text, setText] = useState(data.data.content);
  const [place, setPlace] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if(data.data.type == 1) {
      setPlace("텍스트입니다. ID: " + data.data.id)
    }
    data.data.content = text
  }, [text]);

  return (
    <TextField
    multiline
    rows={(data.data.height-20) / 25}
    value={text}
    onChange={handleChange}
    placeholder={place}
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
