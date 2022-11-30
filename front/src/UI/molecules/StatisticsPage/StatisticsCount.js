import Box from '@mui/material/Box';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function StatisticsCount(props) {
  const data = props.data;

  return (
    <Box
      sx={{
        width: '20%',
        float: 'right',
      }}
    >
      <h4>누적 조회수 : {data.cumulativeViews}</h4>
    </Box>
  );
}
