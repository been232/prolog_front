import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import MyBoardList from '../../molecules/MyPage/MyBoardList';
import ThumbUpBoardList from '../../molecules/MyPage/ThumbUpBoardList';
import MyLayoutList from '../../molecules/MyPage/MyLayoutList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example" >
          <Tab label="내가 쓴 글" {...a11yProps(0)} style={{ fontFamily: "SUIT-Regular" }} />
          <Tab label="좋아요 한 글" {...a11yProps(1)} style={{ fontFamily: "SUIT-Regular" }} />
          <Tab label="내 레이아웃" {...a11yProps(2)} sx={{ display: { xs: 'none', md: 'block' } }} 
            style={{ fontFamily: "SUIT-Regular" }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyBoardList></MyBoardList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ThumbUpBoardList></ThumbUpBoardList>
      </TabPanel>
      <TabPanel value={value} index={2} sx={{ display: { xs: 'none', md: 'block' } }}>
        <MyLayoutList></MyLayoutList>
      </TabPanel>
    </Box>
  );
}
