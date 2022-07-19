import { Box } from '@mui/material';
import React from 'react';
import BasicTextFields from '../../atoms/BoardPage/BasicTextFields';
import WriteContent from '../../organisms/LayoutPage/WriteContent';

function LayoutWritePage() {
  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <BasicTextFields />
      <WriteContent />
    </Box>
  );
}

export default LayoutWritePage;