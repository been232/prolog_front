import { Box } from '@mui/material';
import React from 'react';

function PostBoxTopMolecule() {
  return (
    /* 가시성 때문에 padding 설정함.*/
    <Box sx={{ padding: 1.5 }}>
      <img />
      <p>이미지 들어갈 공간임.</p>
    </Box>
  );
}

export default PostBoxTopMolecule;
