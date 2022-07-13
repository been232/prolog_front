import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dropdown from '../../molecules/BoardPage/FontDropdown';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TextArea from '../../molecules/BoardPage/TextArea';
import { height } from '@mui/system';

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
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [maxHeight, setmaxHeight] = useState(0);
  const [Height, setHeight] = useState(0);

  useEffect(() => {
    arr.map((list) => max(list));
  }, [arr, maxHeight, Height, count]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleArrChange = (newValue) => {
    const content = {
      id: newValue.id,
      context: newValue.content,
      width: newValue.width,
      height: newValue.height,
      x: newValue.x,
      y: newValue.y,
      type: newValue.type,
    };
    setCount(count + 1);
    setArr([...arr, content]);
  };

  function max(list) {
    if (list.y + list.height > maxHeight + Height) {
      setmaxHeight(list.y);
      setHeight(list.height);
    }
  }

  const getData = (data) => {
    setArr(
      arr.map((list) => (list.id === data.id ? { ...list, ...data } : list))
    );
  };

  function lists(list) {
    switch (list.type) {
      case 1:
        return (
          <TextArea key={list.id} list={list} propsFunction={getData}>
            {max(list)}
          </TextArea>
        );
      //   case 2:
      //     return <ImageListAccordion key={list.id} data={list} />;
      //   case 4:
      //     return <HyperLink key={list.id} list={list} />;
      //   default:
      //     return (
      //       <Card
      //       key={list.id}
      //       sx={{
      //         position: 'absolute',
      //         width: list.width,
      //         height: list.height,
      //         borderRadius: 2,
      //         textAlign: 'center',
      //         fontSize: '0.875rem',
      //         fontWeight: '700',
      //         top: list.coordinateY,
      //         left: list.coordinateX,
      //         type: list.type,
      //         border: 1,
      //       }}
      //     >
      //       <CardContent>
      //         {max(list)}
      //         {list.type}
      //       </CardContent>
      //     </Card>
      //     );
    }
  }

  const layoutlist = arr.map((list) => lists(list));

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
            value="content"
            onClick={() =>
              handleArrChange({
                id: count,
                context: '',
                width: 200,
                height: 200,
                x: 0,
                y: 0,
                type: 1,
              })
            }
          />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
          <Tab label="Item One" value="4" />
          <Tab label="Item Two" value="5" />
          <Tab icon={<Dropdown />} aria-label="phone" value="6" />
        </Tabs>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          height: 30 + maxHeight + Height,
        }}
      >
        {layoutlist}
      </Box>
    </Box>
  );
}
