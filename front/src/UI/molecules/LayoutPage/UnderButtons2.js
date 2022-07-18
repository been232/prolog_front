import * as React from 'react';
import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';

export default function UnderButtons2() {
  return (
    <Box sx={{ float: 'right' }}>
      <Link to="/">
        <OutlinedButton content="작성하기" style={{ marginTop: 5, marginBottom: 3}} />
      </Link>
    </Box>
  );
}
