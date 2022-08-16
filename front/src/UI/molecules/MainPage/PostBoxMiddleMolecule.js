import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function PostBoxMiddleMolecule({ title }) {
  return (
    /* padding min-height 재설정 필요함. */
    <Box sx={{ minHeight: 125, padding: 1.5 }}>
      <Link to="/BoardDetail">
        <p>{title}</p>
      </Link>
    </Box>
  );
}

export default PostBoxMiddleMolecule;
