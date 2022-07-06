import { Box } from '@mui/system';
import React from 'react';
import HeartIcon from '../../atoms/MainPage/HeartIcon';

function PostBoxBottomMolecule() {
  return (
    <Box
      sx={{
        borderTop: '1px solid #F1F3F5',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1.5,
      }}
    >
      <span>
        by <b>userName</b>
      </span>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <HeartIcon fontSize="small" />
        100
      </Box>
    </Box>
  );
}

export default PostBoxBottomMolecule;
