import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box>
      <TextField variant="standard" placeholder="제목" sx={{marginLeft : '5%'}}/>
    </Box>
  );
}