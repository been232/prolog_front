import * as React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';

export default function UnderButton() {
  return (
    <Box sx={{ float: 'right', marginRight: '5%', marginTop: 3, marginBottom: 3}}>
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}
