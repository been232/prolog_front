import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import ImageListAccordion from '../../molecules/LayoutPage/ImageListAccordion';

export default function Content(props) {
  const prop = props['layout']['data']['layouts'];
  const [maxHeight, setmaxHeight] = useState(0);
  const [Height, setHeight] = useState(0);

  function max(list) {
    if (list.coordinateY + list.height > maxHeight + Height) {
      setmaxHeight(list.coordinateY);
      setHeight(list.height);
    }
  }

  function lists(list) {
    switch (list.type) {
      case 2:
        return <ImageListAccordion key={list.id} data={list} />;
      default:
        return (
          <div
            key={list.id}
            style={{
              position: 'absolute',
              width: list.width,
              height: list.height,
              top: list.coordinateY,
              left: list.coordinateX,
              type: list.type,
              border: '2px solid black',
            }}
          >
            {max(list)}
            {list.type}
          </div>
        );
    }
  }

  const layoutlist = prop.map((list) => lists(list));

  return (
    <Box sx={{ marginTop: 5, marginBottom: 10 }}>
      <div
        id="parent"
        style={{
          position: 'relative',
          border: '2px solid black',
          width: '99%',
          height: maxHeight + Height + 30,
          marginLeft: 5,
          marginBottom: 10,
        }}
      >
        {layoutlist}
      </div>
    </Box>
  );
}
