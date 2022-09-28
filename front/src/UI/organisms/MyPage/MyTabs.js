import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import MyBoardList from '../../molecules/MyPage/MyBoardList';
import ThumbUpBoardList from '../../molecules/MyPage/ThumbUpBoardList';
import MyLayoutList from '../../molecules/MyPage/MyLayoutList';
import Api from '../../../api/Api';

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

  const [myBoardList, setMyBoardList] = useState();
  const [thumbUpBoardList, setThumbUpBoardList] = useState();
  const [myLayoutList, setMyLayoutList] = useState();

  const resBaseInfo1 = async () => await Api.getMyPost_New();
  const resBaseInfo2 = async () => await Api.getHeartPost();
  const resBaseInfo3 = async () => await Api.getLayoutList();

  useEffect(() => {
    const getData = async () => {
      const infoBody1 = await resBaseInfo1();
      const infoBody2 = await resBaseInfo2();
      const infoBody3 = await resBaseInfo3();
      console.log(infoBody1);
      setMyBoardList(infoBody1.data.data);
      setThumbUpBoardList(infoBody2);
      setMyLayoutList(infoBody3.data);
    }
    getData();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example" >
          <Tab label="내가 쓴 글" {...a11yProps(0)} style={{ fontFamily: "SUIT-Regular" }} />
          <Tab label="좋아요 한 글" {...a11yProps(1)} style={{ fontFamily: "SUIT-Regular" }} />
          <Tab label="내 레이아웃" {...a11yProps(2)} 
            style={{ fontFamily: "SUIT-Regular" }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyBoardList myBoardList={myBoardList}></MyBoardList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ThumbUpBoardList thumbUpBoardList={thumbUpBoardList}></ThumbUpBoardList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyLayoutList myLayoutList={myLayoutList}></MyLayoutList>
      </TabPanel>
    </Box>
  );
}
