import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import TextBar from '../../atoms/SearchPage/TextBar';
import MainPageOrganism from '../../organisms/MainPage/MainPageOrganism';
import SearchBar from '../../organisms/SearchPage/SearchBar';
function SearchPage() {
  const [datas, setDatas] = useState();
  // const datas = {
  //   success: true,
  //   data: [
  //     {
  //       id: 'postId',
  //       title: 'title',
  //       written: '2022-06-07',
  //       member: 'memberName',
  //       memberImage: 'http://~',
  //       likes: '8',
  //       mainLayout: {
  //         type: '1',
  //         width: '12',
  //         height: '35',
  //         content: '어쩌구 저쩌구',
  //       },
  //     },
  //     {
  //       id: 'postId',
  //       title: 'title',
  //       content: '어쩌구 저쩌구',
  //       written: '2022-06-07',
  //       member: 'memberName',
  //       memberImage: 'http://~',
  //       likes: '8',
  //       mainLayout: {
  //         type: '1',
  //         width: '12',
  //         height: '35',
  //         content: '어쩌구 저쩌구',
  //       },
  //     },
  //   ],
  // };
  return (
    <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
      <SearchBar setDatas={setDatas}></SearchBar>
      <Grid container spacing={3} sx={{ marginTop: '3%' }}>
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

export default SearchPage;
