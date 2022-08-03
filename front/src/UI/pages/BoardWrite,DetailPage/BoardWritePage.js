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
        id: 1,
        coordinateX: 397.8150939941406,
        coordinateY: 771.0062866210938,
        height: 100,
        remove: false,
        type: 1,
        width: 594,
        leader: false
      },
      {
        id: 2,
        coordinateX: 399.7236253605954,
        coordinateY: 198.21993199098233,
        height: 400,
        remove: false,
        type: 2,
        width: 594,
        leader: false
      },
      {
        id: 4,
        coordinateX: 397.72362536059563,
        coordinateY: 608.2199319909823,
        height: 150,
        remove: false,
        type: 4,
        width: 594,
        leader: false
      },
      {
        id: 3,
        coordinateX: 1019.7236253605956,
        coordinateY: 200.21993199098233,
        height: 600,
        remove: false,
        type: 3,
        width: 594,
        leader: true
      },
      {
        id: 6,
        coordinateX: 1019.7236253605954,
        coordinateY: 1126.2199319909823,
        height: 600,
        remove: false,
        type: 6,
        width: 594,
        leader: false
      },
      {
        id: 5,
        coordinateX: 1019.7236253605956,
        coordinateY: 814.2199319909823,
        height: 300,
        remove: false,
        type: 5,
        width: 594,
        leader: false
      },
      // {
      //   id: 7,
      //   coordinateX: 866.5886840820312,
      //   coordinateY: 149.46890258789062,
      //   height: 400,
      //   type: 7,
      //   width: 400,
      // },
    ],
  },
];

export default BoardWritePage;
