import { Box, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import StatisticsContent from '../../organisms/StatisticsPage/StatisticsContent';
import StatisticsCount from '../../molecules/StatisticsPage/StatisticsCount';
import ChartList from '../../organisms/StatisticsPage/ChartList';
import UnderButton from '../../molecules/StatisticsPage/UnderButton';
import Api from '../../../api/Api';

function StatisticsPage() {
  const [texts, setTexts] = useState(undefined);
  const highFucntion = (text) => {
    setTexts(text);
  };

  const [year, setYear] = useState(2022);
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const [data, setInfo] = useState(
    {
      success: true,
      data: [
        {
          cumulativeViews: '78',
          tenViews: '7',
          januaryViews: '1',
          februaryViews: '2',
          marchViews: '3',
          aprilViews: '4',
          mayViews: '5',
          juneViews: '6',
          julyViews: '7',
          augustViews: '8',
          septemberViews: '9',
          octoberViews: '10',
          novemberViews: '11',
          decemberViews: '12',
        },
      ],
    },
  );

  const resBaseInfo = async () => await Api.getTotalStatics(year);

  useEffect(() => {
    const getData = async () => {
      const infoBody = await resBaseInfo();
      console.log(infoBody);
      setInfo(infoBody.data);
    }
    getData();
  }, []);

  function list() {
    if (texts != undefined) {
      return (
        <Box sx={{ marginLeft: 20, marginRight: 20 }}>
          <Box
            sx={{
              width: '90%',
              height: 150,
              marginLeft: '5%',
              border: 2,
              display: 'inline-block'
            }}
          >
            <StatisticsCount data={data.data} />
            <h2 style={{ marginLeft: '5%' }}>내 통계</h2>
            <Button onClick={highFucntion} style={{ display: 'inline-block', float: 'right', marginTop: 15 }}>확인</Button>
            <TextField type="number" style={{ display: 'inline-block', float: 'right' }} id="standard-basic" onChange={handleChange} label="년도 입력(숫자만)" variant="standard" />
          </Box>
          <ChartList data={data} />
          <UnderButton />
        </Box>
      );
    } else {
      return (
        <Box sx={{ marginLeft: 20, marginRight: 20 }}>
          <Box
            sx={{
              width: '90%',
              height: 150,
              marginLeft: '5%',
              border: 2,
              display: 'inline-block'
            }}
          >
            <StatisticsCount data={data.data} />
            <h2 style={{ marginLeft: '5%' }}>내 통계</h2>
            <Button onClick={highFucntion} style={{ display: 'inline-block', float: 'right', marginTop: 15 }}>확인</Button>
            <TextField type="number" style={{ display: 'inline-block', float: 'right' }} id="standard-basic" onChange={handleChange} label="년도 입력(숫자만)" variant="standard" />
          </Box>
          <UnderButton />
        </Box>
      );
    }
  }

  return list();
}

export default StatisticsPage;