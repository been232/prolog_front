import { Box, Grid, IconButton, Modal, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyBoardAtoms from '../../atoms/MyPage/MyBoardAtoms';
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
        content: '어쩌구 저쩌구ddd',
      },
    },
  ],
};

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
const MyBoardList = (props) => {
  const [open, setOpen] = useState(false);
  var timer;

  const handleOpen = () => {
    timer = setTimeout(() => setOpen(true), 1000);
  };

  const handleClose = () => {
    setOpen(false);
    clearTimeout(timer);
  };

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handle = () => {
    props.propFunction(text);
  }
  

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
            <MyBoardAtoms data={data}></MyBoardAtoms>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default MyBoardList;
