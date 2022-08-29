import * as React from 'react';
import Api from '../../../api/Api';
import { Box } from '@mui/material';
import OutlinedButton from '../../atoms/Commons/OutlinedButton';
import { Link } from "react-router-dom";

export default function UnderButton(props) {
  const data = props.data;
  const title = props.title;
  const tags = props.tags;
  const layoutID = props.layoutId;
  const datas = [];
  const category = props.category;
  const id = window.location.href.split('/')[4];
  const handleClick = () => {
    data.map((dataitem) => {
      if(dataitem.data.type == 1){
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          leader: dataitem.data.leader
        });
      }
      else if(dataitem.data.type == 2){
        const i = [];
        dataitem.data.images.map((images) => {
          i.push(
            {url: images}
          )
        });
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          explanation: dataitem.data.explanation,
          image: i,
          leader: dataitem.data.leader
        });
      } else if(dataitem.data.type == 5){
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader
        });
      }
      else {
        datas.push({
          id: dataitem.data.id,
          height: dataitem.data.height,
          width: dataitem.data.width,
          coordinateX: dataitem.position.x,
          coordinateY: dataitem.position.y,
          type: dataitem.data.type,
          content: dataitem.data.content,
          explanation: dataitem.data.explanation,
          leader: dataitem.data.leader
        });
      }
    });

    const submit = {
      layoutID: layoutID,
      title: title,
      layouts: datas,
      tag: tags,
      category : category,
      attachment : [],
    };

    const getData = async () => {
      console.log(submit)
      if (submit.title == undefined) {
        alert("제목을 입력해주세요.");
      } else {
        const infoBody = await Api.getModifyBoard(id, submit);
        if (infoBody.status == 200) {
          alert("수정되었습니다");
          window.location.href = "/";
        }
      }
    };
    getData();
  };

  const handledelete = async () => {
    const getData = async () => {
      const infoBody = await Api.getDeleteBoard(id);
      if (infoBody.status == 200) {
        alert("삭제되었습니다");
        window.location.href = "/";
      }
    };
    getData();
  };

  return (
    <Box sx={{ float: 'right', marginTop: 3, marginBottom: 3, marginRight: 10}}>
      <OutlinedButton onClick={handleClick}  content="수정하기" style={{ marginLeft: 2 }} />
      <OutlinedButton onClick={handledelete} content="삭제하기" style={{ marginLeft: 2 }} />
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}