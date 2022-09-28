import { Box } from '@mui/system';
import React from 'react';
import HeartIcon from '../../atoms/MainPage/HeartIcon';
import { Link } from 'react-router-dom';

function PostBoxBottomMolecule({ id, member, memberImage, likes, hits, link }) {
  return (
    <Box
      sx={{
        borderTop: '1px solid #F1F3F5',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1.5,
      }}
    >
      <Link to={`/${link}/${id}`}>
        <span>
          by <b>{member}</b>
        </span>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* <HeartIcon fontSize="small" />
        {likes} */}
          <span>조회수 : {hits}</span>
        </Box>

      </Link>
    </Box>
  );
}

export default PostBoxBottomMolecule;
