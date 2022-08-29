import * as React from 'react';
import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import Api from "../../../api/Api";
import { Link } from "react-router-dom";

export default function UnderButton(props) {
  const data = props.data;
  const title = props.title;
  const tags = props.tags;
  const user = props.user;
  const id = props.layoutId;
  const category = props.category;

  const datas = [];
  const [image, setImage] = React.useState({
    url: '',
  });

  const handleClick = () => {
    data.map((dataitem) => {
      if (dataitem.data.type == 1) {
        datas.push({
          id: parseInt(dataitem.data.id),
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          leader: dataitem.data.leader,
        });
      } else if (dataitem.data.type == 2) {
        const i = [];
        if (dataitem.data.images[0] != undefined) {
          dataitem.data.images.map((images) => {
            i.push({ url: images });
          });
        }

        datas.push({
          id: parseInt(dataitem.data.id),
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          explanation: dataitem.data.explanation,
          images: i,
          leader: dataitem.data.leader,
        });
      } else if (dataitem.data.type == 3) {
        datas.push({
          id: parseInt(dataitem.data.id),
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          codes: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader,
        });
      } else if (dataitem.data.type == 5) {
        datas.push({
          id: parseInt(dataitem.data.id),
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader,
        });
      } else {
        datas.push({
          id: parseInt(dataitem.data.id),
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader,
        });
      }
    });

    const submit = {
      layoutID: id,
      title: title,
      layouts: datas,
      tag: tags,
      category : category,
      attachment : [],
    };

    const getData = async () => {
      if (submit.title == undefined) {
        alert("제목을 입력해주세요.");
      } else {
        const infoBody = await Api.getBoardWrite(submit);
        if (infoBody.status == 200) {
          alert("작성되었습니다");
          window.location.href = "/";
        }
      }
    };
    getData();
  };

  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3, marginRight: 10 }}>
      <OutlinedButton onClick={handleClick} content="저장하기" style={{ marginLeft: 2 }} />
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}
