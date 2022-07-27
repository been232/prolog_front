import * as React from 'react';

import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';

export default function UnderButton(props) {
  const data = props.data;
  const title = props.title;
  const datas = [];
   
  const handleClick = () => {
    data.map((dataitem) => {
      if(dataitem.data.type == 1){
        datas.push({
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
        });
      }
      else if(dataitem.data.type == 2){
        datas.push({
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          explanation: dataitem.data.explanation,
          image: dataitem.data.image
        });
      } else if(dataitem.data.type == 5){
        datas.push({
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation
        });
      }
      else {
        datas.push({
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation
        });
      }
    });

    const submit = {
      user : '',
      moldName: title,
      layouts: datas
    };

    console.log(submit);
  };

  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3 }} onClick={handleClick}>
      <OutlinedButton content="저장하기" style={{ marginLeft: 2 }} />
      {/* <Link to="/"> */}
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      {/* </Link> */}
    </Box>
  );
}