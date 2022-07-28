import { Box, StepContext } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardWrite,DetailPage/BasicTextFields';
import WriteContent from '../../organisms/LayoutPage/WriteContent';

function LayoutWritePage() {
  const [texts, setText] = React.useState('');

  const highFunction = (text) => {
    setText(text);
  }

  useEffect(()=>{},[texts])

  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <BasicTextFields propFunction={highFunction}/>
      <WriteContent title={texts}/>
    </Box>
  );
}

export default LayoutWritePage;