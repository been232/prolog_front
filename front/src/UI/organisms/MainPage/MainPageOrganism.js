import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';
import { useInterval } from './useInterval';

function MainPageOrganism() {
  var timer;
  const onMouse = () => {
    timer = setTimeout(() => console.log('hi'), 1000);
  };
  const offMouse = () => {
    console.log('bye!');
    clearTimeout(timer);
  };
  return (
    <Box
      sx={{
        boxShadow: 'rgb(0 0 0 / 4%) 0px 4px 16px 0px',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={onMouse}
      onMouseLeave={offMouse}
    >
      <PostBoxTopMolecule />
      <PostBoxMiddleMolecule />
      <PostBoxBottomMolecule />
    </Box>
  );
}

export default MainPageOrganism;
