import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Content from '../../organisms/LayoutPage/Content';
import Title from '../../organisms/LayoutPage/Title';

function LayoutPage() {
  return (
    <>
      <Box sx={{ marginLeft: 20, marginRight: 20 }}>
        <Title />
        <Content />
      </Box>
    </>
  );
}

export default LayoutPage;
