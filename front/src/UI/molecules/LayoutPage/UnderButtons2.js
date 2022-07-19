import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function UnderButtons2(props) {
  const data = props.data;
  const title = props.title.title;
  const datas = [];
   
  const handleClick = () => {
    data.map((dataitem) => {
      datas.push({
        height: dataitem.height,
        width: dataitem.width,
        coordinateX: dataitem.position.x,
        coordinateY: dataitem.position.y,
        type: dataitem.data.type,
      });
    });

    const submit = {
      user : '',
      moldName: title,
      layouts: datas
    };
    console.log(submit)
  };

  return (
    <Box onClick={handleClick} sx={{ float: 'right' }}>
      <Link to="/">
      <OutlinedButton
        content="작성하기"
        style={{ marginTop: 5, marginBottom: 3 }}
      />
      </Link>
    </Box>
  );
}
