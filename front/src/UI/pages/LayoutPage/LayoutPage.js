import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Content from '../../organisms/LayoutPage/Content';
import Title from '../../organisms/LayoutPage/Title';
import UnderButtons from '../../molecules/LayoutPage/UnderButtons';

function LayoutPage() {
  return (
    <>
      <Box sx={{ marginLeft: 20, marginRight: 20 }}>
        <Title title={data[0].title} />
        <Content layout={data[0].layouts}/>
        <UnderButtons />
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
        width: 30,
        height: 90,
      },
      {
        id: 2,
        type: 2,
        coordinateX: 60.555,
        coordinateY: 600.555,
        width: 60,
        height: 60,
      },
      {
        id: 3,
        type: 3,
        coordinateX: 100.555,
        coordinateY: 100.555,
        width: 90,
        height: 90,
      },
      {
        id: 4,
        type: 4,
        coordinateX: 100.555,
        coordinateY: 0.555,
        width: 120,
        height: 15,
      },
      {
        id: 5,
        type: 5,
        coordinateX: 500.555,
        coordinateY: 600.555,
        width: 150,
        height: 700,
      },
      {
        id: 6,
        type: 6,
        coordinateX: 700.555,
        coordinateY: 700.555,
        width: 180,
        height: 60,
      },
      {
        id: 7,
        type: 7,
        coordinateX: 900.555,
        coordinateY: 1.555,
        width: 210,
        height: 900,
      },
    ],
  },
];

