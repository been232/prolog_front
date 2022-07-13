import { Box, Grid } from '@mui/material';
import React from 'react';
import MainPageOrganism from '../../organisms/MainPage/MainPageOrganism';

/* Gird Item 들은 기능 연동 후 map 으로 처리하던가 해야할듯 */
function MainPage() {
  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism></MainPageOrganism>
        </Grid>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism></MainPageOrganism>
        </Grid>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism></MainPageOrganism>
        </Grid>
        <Grid item xl={3} lg={4} sm={6}>
          <MainPageOrganism></MainPageOrganism>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage;
