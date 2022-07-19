import * as React from 'react';
import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';

export default function UnderButtons(props) {
  const id = props.id;

  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3 }}>
      <OutlinedButton content="삭제하기" />
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}
