import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const Text = (props) => {
  const data = props;
  const [datas, setDatas] = React.useState({
    id: data.data.id,
    x: data.xPos,
    y: data.yPos,
    width: data.data.width,
    height: data.data.height,
    type: data.data.type,
    content: data.data.content,
  });

  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setDatas({
      id: datas.id,
      x: datas.x,
      y: datas.y,
      width: datas.width,
      height: datas.height,
      type: datas.type,
      content: text,
    });
  }, [text]);

  return (
    <TextField
      multiline
      rows={datas.height / 20}
      value={text}
      onChange={handleChange}
      inputProps={{
        style: {
          fontSize: 14,
          width: datas.width,
          height: datas.height,
          padding: '0 14px',
          fontWeight: 'bold',
        },
      }}
    />
  );
};

export default Text;
