import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import UnderButtons from '../../molecules/BoardWrite,DetailPage/UnderButtons';
import Content from '../../organisms/BoardWrite,DetailPage/Content';
import Api from '../../../api/Api';
import Comment from '../../organisms/BoardWrite,DetailPage/Comment';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function BoardDetailPage() {
  const id = window.location.href.split('/')[4];
  const [data, setData] = React.useState(null);
  console.log(id);
  React.useEffect(() => {
    const getData = async () => {
      const infoBody = await Api.getDetailBoard(id);
      console.log(infoBody);
      setData(infoBody.data.data);
    };
    getData();
  }, []);

  if (!data) return null;
  return (
    <Box sx={{ mx: '2rem' }}>
      <h2 style={{ marginLeft: '5%' }}>{data.post.title}</h2>
      <Content layout={data} />
      <Comment id={id} />
    </Box>
  );
}

export default BoardDetailPage;
