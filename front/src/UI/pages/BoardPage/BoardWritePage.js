import { Box, StepContext } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardPage/BasicTextFields';
import WriteContent from '../../organisms/BoardPage/WriteContent';

function BoardWritePage() {
  const [texts, setText] = React.useState('');

  const highFunction = (text) => {
    setText(text);
  };

  useEffect(() => {}, [texts,data]);

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
        id: 1,
        type: 1,
        coordinateX: -50.555,
        coordinateY: 110.555,
        width: 200,
        height: 400,
      },
      {
        id: 2,
        type: 2,
        coordinateX: 60.555,
        coordinateY: 600.555,
        width: 400,
        height: 400,
      },
      {
        id: 3,
        type: 3,
        coordinateX: 300.555,
        coordinateY: 0.555,
        width: 750,
        height: 505,
      },
      {
        id: 4,
        type: 4,
        coordinateX: -50.555,
        coordinateY: -500,
        width: 200,
        height: 300,
      },
      {
        id: 5,
        type: 5,
        coordinateX: 500.555,
        coordinateY: 600.555,
        width: 400,
        height: 400,
      },
      {
        id: 6,
        type: 6,
        coordinateX: 0.555,
        coordinateY: 1100.555,
        width: 1300,
        height: 200,
      },
      {
        id: 7,
        type: 7,
        coordinateX: 1100.555,
        coordinateY: 1.555,
        width: 210,
        height: 900,
      },
    ],
  },
];

export default BoardWritePage;
