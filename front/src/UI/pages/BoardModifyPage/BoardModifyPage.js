import { Box, StepContext } from '@mui/material';
import React, { useEffect } from 'react';
import BasicTextFields from '../../atoms/BoardModifyPage/BasicTextFields';
import ModifyContent from '../../organisms/BoardModifyPage/ModifyContent';
import Api from '../../../api/Api';
import Category from '../../organisms/BoardWrite,DetailPage/Category';

function BoardModifyPage() {
  const [texts, setText] = React.useState('');
  const id = window.location.href.split('/');
  const [data, setData] = React.useState(null);
  const [category, setCategory] = React.useState('');

  const highFunction = (text) => {
    setText(text);
  };

  const highFunctions = (number) => {
    setCategory(number);
  };

  useEffect(() => {
    const getData = async () => {
      const infoBody = await Api.getBoard(id[4]);
      setData(infoBody.data.data);
      setCategory(infoBody.data.data.category.id);
    };
    getData();
  }, []);

  if (!data) return null;
  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <Box>
        <BasicTextFields propFunction={highFunction} data={data} />
        <Category
          data={datas}
          category={data.category}
          propFunction={highFunctions}
        />
      </Box>
      <ModifyContent title={texts} category={category} layout={data} />
    </Box>
  );
}

export default BoardModifyPage;

const datas = {
  success: true,
  data: [
    {
      id: 1,
      name: '전체',
      count: 2,
      child: [
        {
          id: 2,
          name: '개발용',
          count: 1,
          child: [
            {
              id: 5,
              name: '프론트',
              count: 0,
              child: null,
            },
          ],
        },
        {
          id: 3,
          name: '취미용',
          count: 0,
          child: [],
        },
        {
          id: 4,
          name: '전시용',
          count: 0,
          child: [],
        },
      ],
    },
  ],
};
