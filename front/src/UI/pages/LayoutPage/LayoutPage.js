import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Content from '../../organisms/LayoutPage/Content';

function LayoutPage() {
  return (
    <>
      <Box sx={{ marginLeft: 20, marginRight: 20 }}>
        <h2 style={{ marginLeft: '5%'}}>{data[0].title}</h2>
        <Content layout={data}/>
      </Box>
    </>
  );
}

export default LayoutPage;

const data = [
  {
    layoutId: 1,
    title: 'title',
    layouts: [
      {
        id: 1,
        type: 1,
        coordinateX: 0.555,
        coordinateY: 0.555,
        width: 90,
        height: 90,
      },
      {
        id: 2,
        type: 2,
        coordinateX: 60.555,
        coordinateY: 600.555,
        width: 600,
        height: 400,
      },
      {
        id: 3,
        type: 3,
        coordinateX: 150.555,
        coordinateY: 100.555,
        width: 180,
        height: 400,
      },
      {
        id: 4,
        type: 4,
        coordinateX: 500.555,
        coordinateY: 0.555,
        width: 500,
        height: 505,
      },
      {
        id: 5,
        type: 5,
        coordinateX: 0.555,
        coordinateY: 1100.555,
        width: 1300,
        height: 200,
      },
      {
        id: 6,
        type: 6,
        coordinateX: 700.555,
        coordinateY: 600.555,
        width: 180,
        height: 180,
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

