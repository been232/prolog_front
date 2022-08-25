import { Box, StepContext, Button } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardWrite,DetailPage/BasicTextFields';
import WriteContent from '../../organisms/BoardWrite,DetailPage/WriteContent';
import Api from '../../../api/Api';

function BoardWritePage() {
  const id = window.location.href.split('/');
  const [texts, setText] = React.useState('');
  const [data, setData] = React.useState(null);
  const highFunction = (text) => {
    setText(text);
  };

  useEffect(() => {
    if(id.length == 5){
      const getData = async () => {
        const infoBody = await Api.getLayout(id[4]);
        setData(infoBody.data.data);
      };
      getData();
    }
  }, [texts, data]);

  if (!data) return null;

  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <BasicTextFields propFunction={highFunction} />
      <WriteContent title={texts} layout={data} />
    </Box>
  );
}

export default BoardWritePage;
