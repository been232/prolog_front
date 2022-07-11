import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Content from '../../organisms/LayoutPage/Content';

function LayoutPage() {
  return (
    <>
      <Box sx={{ marginLeft: 20, marginRight: 20 }}>
        <Content />
      </Box>
    </>
  );
}

export default LayoutPage;
