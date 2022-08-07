import { Box, Grid, IconButton, Modal } from '@mui/material';
import React, { useState } from 'react';
import MainPageOrganism from '../../atoms/MyPage/MainPageOrganism';
import CloseIcon from '@mui/icons-material/Close';
import StatisticsContent from '../../atoms/MyPage/StatisticsContent';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';
const datas = {
  success: true,
  data: [
    {
      id: 'postId',
      title: 'title',
      written: '2022-06-07',
      member: 'memberName',
      memberImage: 'http://~',
      likes: '8',
      mainLayout: {
        type: '1',
        width: '12',
        height: '35',
        content: '어쩌구 저쩌구',
      },
    },
    {
      id: 'postId',
      title: 'title',
      content: '어쩌구 저쩌구',
      written: '2022-06-07',
      member: 'memberName',
      memberImage: 'http://~',
      likes: '8',
      mainLayout: {
        type: '1',
        width: '12',
        height: '35',
        content: '어쩌구 저쩌구',
      },
    },
  ],
};
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
const MyBoardList = () => {
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
    <>
      <Grid container spacing={3}>
        {datas.data.map((data, i) => (
          <Grid
            item
            xl={4}
            lg={6}
            sm={6}
            id={data.id}
            key={i}
            onClick={handleOpen}
          >
            <MainPageOrganism data={data}></MainPageOrganism>
          </Grid>
        ))}
      </Grid>
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
    </>
  );
};
export default MyBoardList;
