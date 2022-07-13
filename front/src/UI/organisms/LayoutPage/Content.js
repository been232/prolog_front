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

  function lists(list) {
    var text = '';

    switch (list.type) {
      case 1:
        text = '글 내용1';
        break;
      case 2:
        text = '이미지2';
        break;
      case 3:
        text = '코드3';
        break;
      case 4:
        text = '하이퍼링크4';
        break;
      case 5:
        text = '수학5';
        break;
      case 6:
        text = '비디오6';
        break;
      case 7:
        text = '피피티7';
        break;
    }

    return (
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
          {text}
        </CardContent>
      </Card>
    );
  }

  const layoutlist =props['layout'].map((list) => lists(list));

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
