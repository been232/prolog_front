import { Box, Button, IconButton, Modal } from '@mui/material';
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

function MainPageOrganism(props) {
  const [open, setOpen] = useState(false);
  var timer;
  const handleOpen = () => {
    timer = setTimeout(() => {
      setOpen(true);
    }, 1000);
  };
  const handleClose = () => {
    setOpen(false);
    clearTimeout(timer);
  };
  const { id, title, written, member, memberImage, likes, mainLayout } =
    props.data;
  // 게시글 조회로 연동
  return (
    <Box
      sx={{
        boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 16px 0px',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 400, height: 600 }}>
          <IconButton
            sx={{ position: 'fixed', top: 0, right: 0 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {/* <p>게시글 미리보기 들어감.</p> */}
          <Box>{mainLayout.content}</Box>
        </Box>
      </Modal>
      <PostBoxTopMolecule id={id} />
      <PostBoxMiddleMolecule title={title} id={id} />
      <PostBoxBottomMolecule
        member={member}
        memberImage={memberImage}
        likes={likes}
      />
    </Box>
  );
}

export default MainPageOrganism;
