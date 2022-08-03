import { Box, Grid } from '@mui/material';
import React from 'react';
import MainPageOrganism from '../../organisms/MainPage/MainPageOrganism';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function MainPage() {
  const datas = {
    success: true,
    data: [
      {
        id: 'postId',
        title: 'title',
        written: '2022-06-07',
        member: 'memberName',
        memberImage: 'http://~',
        likes: '8',
        mainLayout: {
          type: '1',
          width: '12',
          height: '35',
          content: '어쩌구 저쩌구',
        },
      },
      {
        id: 'postId',
        title: 'title',
        content: '어쩌구 저쩌구',
        written: '2022-06-07',
        member: 'memberName',
        memberImage: 'http://~',
        likes: '8',
        mainLayout: {
          type: '1',
          width: '12',
          height: '35',
          content: '어쩌구 저쩌구',
        },
      },
    ],
  };
  return (
    <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
      <Grid container spacing={3}>
        {/* <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism data={data}></MainPageOrganism>
        </Grid>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism data={data}></MainPageOrganism>
        </Grid>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism data={data}></MainPageOrganism>
        </Grid>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism data={data}></MainPageOrganism>
        </Grid> */}
        {datas &&
          datas.data.map((data) => (
            <Grid item xl={3} lg={4} sm={6} id={data.id}>
              <MainPageOrganism data={data}></MainPageOrganism>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default MainPage;
