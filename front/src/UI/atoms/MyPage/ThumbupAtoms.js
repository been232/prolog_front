import { Box, Button, IconButton, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';
import CloseIcon from '@mui/icons-material/Close';
// import { useInterval } from './useInterval';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 12,
  pt: 2,
  px: 4,
  pb: 3,
};

function ThumbupAtoms(props) {
  const { id, title, written, member, memberImage, likes, mainLayout } = props.data;
  return (
    <>
      <Box
        sx={{
          boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 16px 0px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PostBoxTopMolecule id={id} link={"BoardDetail"}/>
        <PostBoxMiddleMolecule id={id} link={"BoardDetail"} title={title} />
        <PostBoxBottomMolecule
          id={id}
          link={"BoardDetail"}
          member={member}
          memberImage={memberImage}
          likes={likes}
        />

      </Box>

    </>
  );
}

export default ThumbupAtoms;
