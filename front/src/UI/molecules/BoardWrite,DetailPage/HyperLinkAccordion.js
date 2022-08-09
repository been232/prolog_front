import * as React from 'react';
import HyperLink from '../../atoms/BoardWrite,DetailPage/HyperLink';
import ContentText from '../../atoms/BoardWrite,DetailPage/ContentText';
import HyperText from '../../atoms/BoardWrite,DetailPage/HyperText';
import { Box, Card, CardContent } from '@mui/material';

export default function HyperLinkAccordion(props) {
  const data = props.data;
  const board = data.board;

  const highFunction = (text) => {
    data.explanation = text;
  };

  const highFunctionText = (text) => {
    data.content = text;
  };

  React.useEffect(() => {}, []);

  return (
    <Card
      style={{
        width: data.width,
        height: data.height
      }}
    >
      <CardContent>
        {board == true ? (
          <ContentText data={data} level={1} />
        ) : (
          <Box>
            ID : {data.id}
            <HyperLink data={data} propFunction={highFunctionText} />
          </Box>
        )}

        {board == true ? (
          <ContentText data={data} level={2} />
        ) : (
          <HyperText propFunction={highFunction} />
        )}
      </CardContent>
    </Card>
  );
}
