import { Box, Button, IconButton, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';
import LinkButton from '../../atoms/MyPage/LinkButton';
import CloseIcon from '@mui/icons-material/Close';
import Api from '../../../api/Api';
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
  const { id, title, written, member, memberImage, likes, mainLayout, hits } = props.data;
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2022);
  const [visible, setVisible] = useState(false);
  var timer;

  const resBaseInfo = async () => await Api.getMiniStatics(id, year);

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
    setYear(event.target.value);
  };

  const handleCheck = async () => {
    // id와 year값을 전달해서 통신하는 코드 작성하기
    const infoBody = await resBaseInfo();
    console.log(infoBody);

    if (infoBody.data.success === true) {
      console.log("통계 불러오기 완료");
      setVisible(true);
      setInfo(infoBody.data);
    } else {
      setVisible(false);
    }
  };

  const [data, setInfo] = useState(
    {
      success: true,
      data: [
        {
          cumulativeViews: '78',
          tenViews: '7',
          januaryViews: '1',
          februaryViews: '2',
          marchViews: '3',
          aprilViews: '4',
          mayViews: '5',
          juneViews: '6',
          julyViews: '7',
          augustViews: '8',
          septemberViews: '9',
          octoberViews: '10',
          novemberViews: '11',
          decemberViews: '12',
        },
      ],
    },
  );

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
            <Box sx={{ ...style, width: 400, height: 400 }}>
              <IconButton
                sx={{ position: 'fixed', top: 0, right: 0 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  width: '90%',
                  height: 50,
                  display: 'inline-block'
                }}>
                <Button onClick={handleCheck} style={{ display: 'inline-block', float: 'right', marginTop: 15, fontFamily: "SUIT-Regular" }} >확인</Button>
                <TextField type="number" style={{ display: 'inline-block', float: 'right', fontFamily: "SUIT-Regular" }} id="standard-basic" onChange={(event) => handleChange(event)} label="년도 입력(숫자만)" variant="standard" />
              </Box>
              <ChartList data={data} text={year} />
              <UnderButton />
              <LinkButton id={id}/>
            </Box>

          ) : (
            <Box sx={{ ...style, width: 400, height: 400 }}>
              <IconButton
                sx={{ position: 'fixed', top: 0, right: 0 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  width: '90%',
                  height: 50,
                  display: 'inline-block'
                }}>
                <Button onClick={handleCheck} style={{ display: 'inline-block', float: 'right', marginTop: 15, fontFamily: "SUIT-Regular" }}>확인</Button>
                <TextField type="number" style={{ display: 'inline-block', float: 'right', fontFamily: "SUIT-Regular" }} id="standard-basic" onChange={(event) => handleChange(event)} label="년도 입력(숫자만)" variant="standard" />
              </Box>
              <UnderButton />
              <LinkButton id={id}/>
            </Box>
          )
        }
      </Modal>
      <PostBoxTopMolecule id={id} link="boardDetail" />
      <PostBoxMiddleMolecule id={id} link="boardDetail" title={title} />
      <PostBoxBottomMolecule
        id={id}
        link="boardDetail"
        member={member}
        memberImage={memberImage}
        likes={likes}
        hits={hits}
      />
    </Box>
  );
}

export default MyBoardAtoms;
