import * as React from "react";
import { Box, Button } from "@mui/material";
import OutlinedButton from "../../atoms/Commons/OutlinedButton";
import { Link } from "react-router-dom";
import Api from "../../../api/Api";

export default function UnderButtons(props) {
  const id = props.id;

  async function handledelete() {
    const infoBody = await Api.getDeleteLayout(id);
    console.log(infoBody);
    if (infoBody.status == 200) {
      alert("삭제되었습니다");
      window.location.href = "/";
    }
  };

  return (
    <Box sx={{ float: "right", marginTop: 3, marginBottom: 3 }}>
      <Button
        style={{ marginLeft: 2, fontFamily: 'SUIT-Regular' }}
        variant="outlined"
        onClick={()=>handledelete()}
      >
        삭제하기
      </Button>
      <Link to={`/BoardWrite/${id}`}>
        <OutlinedButton content="사용하기" style={{ marginLeft: 2 }} />
      </Link>
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}
