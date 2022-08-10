import { Box, Button, IconButton, Modal, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';
import LinkButton from '../../atoms/MyPage/LinkButton';
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

function MyBoardAtoms(props) {
  const { id, title, written, member, memberImage, likes, mainLayout } = props.data;
  const [open, setOpen] = useState(false);
  var timer;
  const [text, setText] = useState(undefined);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    timer = setTimeout(() => {
      setOpen(true);
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
    clearTimeout(timer);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCheck = (event) => {
    // id와 text값을 전달해서 통신하는 코드 작성하기
    console.log("통계 불러오기 완료");

    const response = {
      "success": true,
    }

    if (response.success) {
      setVisible(true);
    } else {
      setVisible(false);
    }

  };

  useEffect(() => { }, [text])

  return (
    <Box
      sx={{
        boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 16px 0px',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      style={{ fontFamily: 'SUIT-Medium' }}
    >
      <Modal open={open} onClose={handleClose}>
        {
          (visible) ? (
            <Box sx={{ ...style, width: 400, height: 600 }}>
              <IconButton
                sx={{ position: 'fixed', top: 0, right: 0 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  width: '90%',
                  height: 100,
                  marginLeft: '5%',
                  display: 'inline-block'
                }}>
                <Button onClick={handleCheck} style={{ display: 'inline-block', float: 'right', marginTop: 15 }}>확인</Button>
                <TextField type="number" style={{ display: 'inline-block', float: 'right' }} id="standard-basic" onChange={handleChange} label="년도 입력(숫자만)" variant="standard" />
              </Box>
              <ChartList data={data} text={text} />
              <UnderButton />
              <LinkButton id={id}/>
            </Box>

          ) : (
            <Box sx={{ ...style, width: 400, height: 600 }}>
              <IconButton
                sx={{ position: 'fixed', top: 0, right: 0 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  width: '90%',
                  height: 100,
                  marginLeft: '5%',
                  display: 'inline-block'
                }}>
                <Button onClick={handleCheck} style={{ display: 'inline-block', float: 'right', marginTop: 15 }}>확인</Button>
                <TextField type="number" style={{ display: 'inline-block', float: 'right' }} id="standard-basic" onChange={handleChange} label="년도 입력(숫자만)" variant="standard" />
              </Box>
              <UnderButton />
              <LinkButton id={id}/>
            </Box>
          )
        }
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

export default MyBoardAtoms;
