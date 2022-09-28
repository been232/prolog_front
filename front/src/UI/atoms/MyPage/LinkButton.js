import * as React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';

export default function LinkButton(props) {
  const boardId = props.id;
  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3}} style={{ fontFamily: "SUIT-Regular" }}>
      <Link to={`/BoardDetail/${boardId}`} >
        <OutlinedButton  content="게시글 보기" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}