import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const AccordionListText = (props) => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
    props.propFunction(event.target.value);
  };

  useEffect(() => {
  }, [text]);

  return (
    <TextField
      value={text}
      fullWidth
      onChange={handleChange}
      inputProps={{
        style: {
          fontWeight: 'bold',
          fontFamily: "KOTRAHOPE"
        },
      }}
    />
  );
};

export default AccordionListText;
