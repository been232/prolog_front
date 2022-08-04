import Box from '@mui/material/Box';
import { useEffect, useRef, useState, useCallback } from 'react';
import StatisticsCount from '../../molecules/StatisticsPage/StatisticsCount';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function StatisticsContent(props) {
    const data = props.data[0].data[0];
    const [text, setText] = useState('');

    const handleChange = (event) => {
      setText(event.target.value);
    };

    const handle = () => {
      props.propFunction(text);
    }
    
    useEffect(() => {}, [text])

  return (
      <Box
        sx={{
          width: '90%',
          height: 150,
          marginLeft: '5%',
          border: 2,
          display: 'inline-block'
        }}
      >
        <StatisticsCount data={data} />
        <h2 style={{marginLeft: '5%'}}>내 통계</h2>
        <Button onClick={handle} style={{display: 'inline-block', float: 'right', marginTop: 15}}>확인</Button>
        <TextField type="number" style={{display: 'inline-block', float: 'right'}} id="standard-basic" onChange={handleChange} label="년도 입력(숫자만)" variant="standard" />
    </Box>
  );
}
