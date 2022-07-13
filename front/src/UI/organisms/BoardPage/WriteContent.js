import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dropdown from '../../molecules/BoardPage/FontDropdown';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TextArea from '../../molecules/BoardPage/TextArea';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3, height: 800 }}>
          <Typography>{children}</Typography>
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

export default function WriteContent() {
  const [value, setValue] = useState('content');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '90%',
        marginLeft: '5%',
        border: 2,
        marginTop: 5,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab
            icon={<ArticleOutlinedIcon />}
            aria-label="ArticleOutlinedIcon"
            value='content'
          />
          <Tab label="Item Two" value='2'/>
          <Tab label="Item Three" value='3'/>
          <Tab label="Item One" value='4'/>
          <Tab label="Item Two" value='5'/>
          <Tab icon={<Dropdown />} aria-label="phone" value='6'/>
        </Tabs>
      </Box>
      <Box
        sx={{
          width: '90%',
          marginLeft: '5%',
          height: 800,
        }}
      >
        
      </Box>
    </Box>
  );
}
