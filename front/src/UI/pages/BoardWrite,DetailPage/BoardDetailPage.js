import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import UnderButtons from '../../molecules/BoardWrite,DetailPage/UnderButtons';
import Content from '../../organisms/BoardWrite,DetailPage/Content';
import Api from '../../../api/Api';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function BoardDetailPage() {
  const id = window.location.href.split('/')[4];
  const [data, setData] = React.useState(null);

  React.useEffect(()=> {
    const getData = async () => {
      const infoBody = await Api.getBoard(id);
      console.log(infoBody);
      setData(infoBody.data.data);
    };
    getData();
  },[data])
  
  if (!data) return null;
  return (
    <Box sx={{ mx: '2rem' }}>
      {/* <h2 style={{ marginLeft: '5%' }}>{data.data.post.title}</h2>
      <Content layout={data} /> */}
    </Box>
  );
}

export default BoardDetailPage;
