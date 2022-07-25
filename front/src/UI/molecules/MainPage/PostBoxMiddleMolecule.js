import { Box } from '@mui/material';
import React from 'react';

function PostBoxMiddleMolecule({ title }) {
  return (
    /* padding min-height 재설정 필요함. */
    <Box sx={{ minHeight: 125, padding: 1.5 }}>
      <p>{title}</p>
    </Box>
  );
}

export default PostBoxMiddleMolecule;
