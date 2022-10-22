import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Content from '../../organisms/LayoutPage/Content';
import Api from '../../../api/Api';

const LayoutPage = () =>  {
  const id = window.location.href.split('/')[4];
  const [data, setData] = React.useState(null);

  React.useEffect(()=> {
    const getData = async () => {
      const infoBody = await Api.getLayout(id);
      console.log(infoBody)
      setData(infoBody.data.data);
    };
    getData();
  },[])
  
  if (!data) return null;

  return (
    <>
      <Box sx={{ marginLeft: 20, marginRight: 20 }}>
        <h2 style={{ marginLeft: '5%' }}>{data.title}</h2>
        <Content layout={data} />
      </Box>
    </>
  );
}

export default LayoutPage;


