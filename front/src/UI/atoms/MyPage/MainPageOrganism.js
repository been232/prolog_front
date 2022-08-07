import { Box, Button, IconButton, Modal } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';
import CloseIcon from '@mui/icons-material/Close';
import StatisticsContent from '../../atoms/MyPage/StatisticsContent';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';
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
  const { id, title, written, member, memberImage, likes, mainLayout } = props.data;
  const [open, setOpen] = useState(false);
  var timer;

  const handleOpen = () => {
    timer = setTimeout(() => setOpen(true), 1000);
  };

  const handleClose = () => {
    setOpen(false);
    clearTimeout(timer);
  };

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
        <Box sx={{ ...style, width: 600, height: 600 }}>
          <IconButton
            sx={{ position: 'fixed', top: 0, right: 0 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <StatisticsContent data={data} />
          <ChartList data={data} />
          <UnderButton />
        </Box>
      </Modal>
      <PostBoxTopMolecule />
      <PostBoxMiddleMolecule title={title} />
      <PostBoxBottomMolecule
        member={member}
        memberImage={memberImage}
        likes={likes}
      />
    </Box>
  );
}

export default MainPageOrganism;

const data = [
  {
    success: true,
    data: [
      {
        cumulativeView: '78',
        tenView: '7',
        januaryView: '1',
        februaryView: '2',
        marchView: '3',
        aprilView: '4',
        mayView: '5',
        juneView: '6',
        julyView: '7',
        augustView: '8',
        septemberView: '9',
        octoberView: '10',
        novemberView: '11',
        decemberView: '12',
      },
    ],
  },
];
