import { Box, StepContext } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardModifyPage/BasicTextFields';
import ModifyContent from '../../organisms/BoardModifyPage/ModifyContent';
import Api from '../../../api/Api';
import Category from '../../organisms/BoardModifyPage/CategoryModify';

function BoardModifyPage() {
  const [texts, setText] = React.useState('');
  const id = window.location.href.split('/');
  const [data, setData] = React.useState(null);
  const [category, setCategory] = React.useState([]);
  const [number2, setnumber] = React.useState(0);

  const highFunction = (text) => {
    setText(text);
  };

  const highFunctions = (number) => {
    console.log(number)
    setnumber(number);
  };

  useEffect(() => {
    const getData = async () => {
      const infoBody = await Api.getBoard(id[4]);
      console.log(infoBody)
      setData(infoBody.data.data);
    };
    getData();
    const getData2 = async () => {
      const infoBody2 = await Api.getReadMyInfo();
      const infoBody = await Api.getCategory(infoBody2.data.data.account);
      setCategory(infoBody.data.data);
    };
    getData2();
  }, []);

  if (!data) return null;
  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <Box>
        <BasicTextFields propFunction={highFunction} data={data} />
        <Category
          data={data}
          category={category}
          propFunction={highFunctions}
        />
      </Box>
      <ModifyContent title={texts} category={number2} layout={data} />
    </Box>
  );
}

export default BoardModifyPage;