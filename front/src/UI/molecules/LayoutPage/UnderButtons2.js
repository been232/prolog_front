import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../../api/Api';

export default function UnderButtons2(props) {
  const data = props.data;
  const title = props.title.title;
  const datas = [];
  const user = props.user;

  const handleClick = () => {
    data.map((dataitem) => {
      datas.push({
        id: parseInt(dataitem.id),
        height: dataitem.height,
        width: dataitem.width - 30,
        coordinateX: dataitem.position.x,
        coordinateY: dataitem.position.y,
        type: dataitem.data.type,
      });
    });

    const submit = {
      user: user,
      moldName: title,
      layouts: datas,
    };

    const getData = async () => {
      const infoBody = await Api.getLayoutWrite(submit);
      console.log(infoBody);
    };
    getData();
  };

  return (
    <Box onClick={handleClick} sx={{ float: 'right', marginTop: 3, marginBottom: 3 }}>
      <OutlinedButton content="작성하기" style={{ marginLeft: 2 }} />
      {/* <Link to="/"> */}
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      {/* </Link> */}
    </Box>
  );
}
