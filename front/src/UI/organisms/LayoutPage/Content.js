import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';

export default function Content(props) {
  const [maxHeight, setmaxHeight] = useState(0);
  const [Height, setHeight] = useState(0);

  function max(list) {
    if (list.coordinateY + list.height > maxHeight + Height) {
      setmaxHeight(list.coordinateY);
      setHeight(list.height);
    }
  }

  const layoutlist = props['layout'].map((list) => (
    <Card
      key={list.id}
      sx={{
        position: 'absolute',
        width: list.width,
        height: list.height,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        top: list.coordinateY,
        left: list.coordinateX,
        type: list.type,
        border: 1,
      }}
    >
      <CardContent>
        {max(list)}
        {list.type}
      </CardContent>
    </Card>
  ));

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
