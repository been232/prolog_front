import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const AccordionListText = (props) => {
  const data = props.data.explanation;
  const [text, setText] = useState(data);
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
      multiline
      row={3}
      onChange={handleChange}
      inputProps={{
        style: {
          fontSize: 14,
          padding: '0 14px',
          fontWeight: 'bold',
          height: 70,
          fontFamily: "KOTRAHOPE"
        },
      }}
    />
  );
};

export default AccordionListText;
