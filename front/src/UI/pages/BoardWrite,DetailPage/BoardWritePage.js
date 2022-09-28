import { Box, StepContext, Button } from "@mui/material";
import React, { useEffect } from "react";
import BasicTextFields from "../../atoms/BoardWrite,DetailPage/BasicTextFields";
import WriteContent from "../../organisms/BoardWrite,DetailPage/WriteContent";
import Api from "../../../api/Api";
import Category from "../../organisms/BoardWrite,DetailPage/Category";

function BoardWritePage() {
  const id = window.location.href.split("/");
  const [texts, setText] = React.useState("");
  const [data, setData] = React.useState(null);
  const [datas, setDatas] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const highFunction = (text) => {
    setText(text);
  };

  const highFunctions = (number) => {
    setCategory(number);
  };

  useEffect(() => {
    if (id.length == 5) {
      const getData = async () => {
        const infoBody = await Api.getLayout(id[4]);
        setData(infoBody.data.data);
      };
      getData();
      const getData2 = async () => {
        const infoBody = await Api.getCategory();
        setDatas(infoBody.data.data);
      };
      getData2();
    }
  }, []);

  if (!data || !datas) return null;

  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <Box>
        <BasicTextFields propFunction={highFunction} />
        <Category data={datas} category={''} propFunction={highFunctions} />
      </Box>
      <WriteContent title={texts} layout={data} category={category} />
    </Box>
  );
}

export default BoardWritePage;