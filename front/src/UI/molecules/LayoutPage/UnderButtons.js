import * as React from "react";
import { Box } from "@mui/material";
import OutlinedButton from "../../atoms/Commons/OutlinedButton";
import { Link } from "react-router-dom";
import Api from "../../../api/Api";

export default function UnderButtons(props) {
  const id = props.id;

  const handledelete = async () => {
    const getData = async () => {
      const infoBody = await Api.getDeleteLayout(id);
      console.log(infoBody);
    };
    getData();
  };

  return (
    <Box sx={{ float: "right", marginTop: 3, marginBottom: 3 }}>
      <OutlinedButton
        onClick={handledelete}
        content="삭제하기"
        style={{ marginLeft: 2 }}
      />
      <Link to={`/BoardWrite/${id}`}>
        <OutlinedButton content="사용하기" style={{ marginLeft: 2 }} />
      </Link>
      <Link to="/">
        <OutlinedButton content="목록으로" style={{ marginLeft: 2 }} />
      </Link>
    </Box>
  );
}
