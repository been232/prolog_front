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

  const [text, setText] = useState(2022);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [data, setInfo] = useState(
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
  );

  const resBaseInfo = async () => await Api.getTotalStatics(text);

  useEffect(() => {
    const getData = async () => {
      const infoBody = await resBaseInfo();
      console.log(infoBody);
      setInfo(infoBody.data);
    }
    getData();
  }, [texts]);

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
          <ChartList data={data} text={texts} />
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

// const data = [
//   {
//     success: true,
//     data: [
//       {
//         cumulativeView: '78',
//         tenView: '7',
//         januaryView: '1',
//         februaryView: '2',
//         marchView: '3',
//         aprilView: '4',
//         mayView: '5',
//         juneView: '6',
//         julyView: '7',
//         augustView: '8',
//         septemberView: '9',
//         octoberView: '10',
//         novemberView: '11',
//         decemberView: '12',
//       },
//     ],
//   },
// ];
