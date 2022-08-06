import Box from '@mui/material/Box';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function StatisticsCount(props) {
  const data = props.data;

  return (
    <Box
      sx={{
        width: '30%',
        float: 'right',
      }}
    >
      <h4>누적 조회수 : {data.cumulativeView}</h4>
      <h6>최근 10일간 조회수 : {data.tenView}</h6>
    </Box>
  );
}
