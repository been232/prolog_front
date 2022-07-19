import * as React from 'react';

import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';

export default function UnderButtons(props) {
  const data = props.data;
  const title = props.title;
  const datas = [];
   
  const handleClick = () => {
    console.log(data)
    data.map((dataitem) => {
      datas.push({
        height: dataitem.height,
        width: dataitem.width,
        coordinateX: dataitem.position.x,
        coordinateY: dataitem.position.y,
        type: dataitem.data.type,
        content: dataitem.data.content
      });
    });

    const submit = {
      user : '',
      moldName: title,
      layouts: datas
    };
  };

  return (
    <Box sx={{ float: 'right'}} onClick={handleClick}>
      <OutlinedButton content="수정하기" />
      <OutlinedButton content="삭제하기" style={{ marginLeft: 2 }} />
      {/* <Link to="/"> */}
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      {/* </Link> */}
    </Box>
  );
}
