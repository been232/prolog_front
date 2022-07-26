import * as React from 'react';
import Box from '@mui/material/Box';

export default function BasicTextFields(props) {
  const data = props.data.explanation;

  return (
    <Box style={{whiteSpace: 'pre-wrap'}}>
        {data}
    </Box>
  );
}
