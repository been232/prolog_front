import { Box } from '@mui/material';
import React from 'react';

function PostBoxMiddleMolecule() {
  return (
    /* padding min-height 재설정 필요함. */
    <Box sx={{ minHeight: 125, padding: 1.5 }}>
      <p>story</p>
    </Box>
  );
}

export default PostBoxMiddleMolecule;
