import { Box } from '@mui/material';
import React from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';

function MainPageOrganism() {
  return (
    <Box
      sx={{
        boxShadow: 'rgb(0 0 0 / 4%) 0px 4px 16px 0px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PostBoxTopMolecule />
      <PostBoxMiddleMolecule />
      <PostBoxBottomMolecule />
    </Box>
  );
}

export default MainPageOrganism;
