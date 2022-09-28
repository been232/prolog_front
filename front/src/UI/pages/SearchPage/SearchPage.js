import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import TextBar from '../../atoms/SearchPage/TextBar';
import MainPageOrganism from '../../organisms/MainPage/MainPageOrganism';
import SearchBar from '../../organisms/SearchPage/SearchBar';
function SearchPage() {
  const [datas, setDatas] = useState();
  return (
    <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
      <SearchBar setDatas={setDatas}></SearchBar>
      <Grid container spacing={3} sx={{ marginTop: '3%' }}>
        {datas &&
          datas.data.map((data) => (
            <Grid item xl={3} lg={4} sm={6} key={data.id}>
              <MainPageOrganism data={data}></MainPageOrganism>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default SearchPage;
