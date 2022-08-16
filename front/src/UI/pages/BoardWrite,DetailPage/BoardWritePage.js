import { Box, StepContext, Button } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardWrite,DetailPage/BasicTextFields';
import WriteContent from '../../organisms/BoardWrite,DetailPage/WriteContent';

function BoardWritePage() {
  const [texts, setText] = React.useState('');

  const highFunction = (text) => {
    setText(text);
  };

  useEffect(() => {}, [texts, data]);

  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <BasicTextFields propFunction={highFunction} />
      <WriteContent title={texts} layout={data} />
    </Box>
  );
}

const data = [
  {
    layoutId: 1,
    title: 'title',
    layouts: [
      {
        coordinateX: 468.6634070692694,
        coordinateY: 281.61806881723965,
        height: 479,
        id: 2,
        type: 2,
        width: 794,
      },
      {
        coordinateX: 469.93284332031544,
        coordinateY: 778.4286011610775,
        height: 149,
        id: 3,
        type: 1,
        width: 794,
      },
      {
        coordinateX: 469.5513725236415,
        coordinateY: 944.1029916903926,
        height: 600,
        id: 4,
        type: 3,
        width: 794,
      },
      {
        coordinateX: 467.5513725236415,
        coordinateY: 1566.1029916903926,
        height: 600,
        id: 5,
        type: 5,
        width: 794,
      },
      {
        coordinateX: 465.5513725236415,
        coordinateY: 2188.1029916903926,
        height: 150,
        id: 6,
        type: 4,
        width: 594,
      },
      {
        coordinateX: 465.5513725236415,
        coordinateY: 2354.1029916903926,
        height: 600,
        id: 7,
        type: 1,
        width: 794,
      },
      {
        coordinateX: 467.5513725236415,
        coordinateY: -35.8970083096074,
        height: 300,
        id: 8,
        type: 1,
        width: 794,
      },
      {
        coordinateX: 467.5513725236415,
        coordinateY: 2954.8970083096074,
        height: 800,
        id: 8,
        type: 6,
        width: 794,
      },
    ],
  },
];

export default BoardWritePage;
