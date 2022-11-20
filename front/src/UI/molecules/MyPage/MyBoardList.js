import { Box, Grid, IconButton, Modal, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyBoardAtoms from '../../atoms/MyPage/MyBoardAtoms';
import CloseIcon from '@mui/icons-material/Close';
import StatisticsContent from '../../atoms/MyPage/StatisticsContent';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';
import Api from '../../../api/Api';

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
  const myBoardList = props.myBoardList;

  return (
    <>
      <Grid container spacing={3}>
        {(myBoardList === undefined) ? (
          ""
        ) : (
          <>
            {myBoardList.map((data, i) => (
              <Grid
                item
                xl={4}
                lg={6}
                sm={12}
                id={i}
                key={i}
              // onClick={handleOpen}
              >
                <MyBoardAtoms data={data}></MyBoardAtoms>
              </Grid>
            ))}
          </>
        )}

      </Grid>
    </>
  );
};
export default MyBoardList;
