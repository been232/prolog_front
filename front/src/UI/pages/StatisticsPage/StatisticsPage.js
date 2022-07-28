import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import StatisticsContent from '../../organisms/StatisticsPage/StatisticsContent';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';

function StatisticsPage() {
  return (
    <>
      <Box sx={{ marginLeft: 20, marginRight: 20 }}>
        <StatisticsContent data={data}/>
        <ChartList data={data}/>
        <UnderButton />
      </Box>
    </>
  );
}

export default StatisticsPage;

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
