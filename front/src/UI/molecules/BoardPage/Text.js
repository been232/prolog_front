import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const Text = (props) => {
  const data = props;
  const [text, setText] = useState('');
  const [place, setPlace] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if(data.data.type == 1) {
      setPlace("텍스트입니다.")
    }
    else if(data.data.type == 4) {
      setPlace("하이퍼링크입니다.")
    }
    data.data.content = text
  }, [text, place]);

  return (
    <TextField
      multiline
      rows={data.data.height / 20}
      value={text}
      onChange={handleChange}
      placeholder={place}
      inputProps={{
        style: {
          fontSize: 14,
          width: data.data.width,
          height: data.data.height,
          padding: '0 14px',
          fontWeight: 'bold',
        },
      }}
    />
  );
};

export default Text;
