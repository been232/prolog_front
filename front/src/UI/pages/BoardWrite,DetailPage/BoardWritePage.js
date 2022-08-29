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
    }
  }, [texts, data, category]);

  if (!data) return null;

  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
      <Box>
        <BasicTextFields propFunction={highFunction} />
        <Category data={datas} propFunction={highFunctions} />
      </Box>
      <WriteContent title={texts} layout={data} category={category} />
    </Box>
  );
}

export default BoardWritePage;

const datas ={
  "success": true,
  "data": [
      {
          "id": 1,
          "name": "전체",
          "count": 2,
          "child": [
              {
                  "id": 2,
                  "name": "개발용",
                  "count": 1,
                  "child": [
                      {
                          "id": 5,
                          "name": "프론트",
                          "count": 0,
                          "child": null
                      },
                  ]
              },
              {
                  "id": 3,
                  "name": "취미용",
                  "count": 0,
                  "child": []
              },
              {
                  "id": 4,
                  "name": "전시용",
                  "count": 0,
                  "child": []
              }
          ]
      }
  ]
};