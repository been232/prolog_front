import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function PostBoxTopMolecule(props) {
  const { id } = props;
  return (
    /* 가시성 때문에 padding 설정함.*/
    <Box sx={{ padding: 1.5 }}>
      <Link to={`/boardDetail/${id}`}>
        <img />
        <p>이미지 들어갈 공간임.</p>
      </Link>
    </Box>
  );
}

export default PostBoxTopMolecule;
