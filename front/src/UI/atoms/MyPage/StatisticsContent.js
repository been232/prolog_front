import Box from '@mui/material/Box';
import { useEffect, useRef, useState, useCallback } from 'react';
import StatisticsCount from '../../atoms/MyPage/StatisticsCount';

export default function StatisticsContent(props) {
    const data = props.data[0].data[0];

  return (
      <Box
        sx={{
          width: '90%',
          height: 100,
          marginLeft: '5%',
          border: 2,
          marginTop: 5,
          display: 'inline-block'
        }}
      >
        <StatisticsCount data={data}/>
        <h2 style={{marginLeft: '5%'}}>내 통계</h2>
    </Box>
  );
}
