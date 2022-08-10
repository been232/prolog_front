import * as React from 'react';
import HyperLink from '../../atoms/BoardModifyPage/HyperLink';
import HyperText from '../../atoms/BoardModifyPage/HyperText';
import { Card, CardContent } from '@mui/material';

export default function HyperLinkAccordion(props) {
  const data = props.data;

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
        height: data.height,
      }}
    >
      <CardContent>
      ID: {data.id}
        <HyperLink propFunction={highFunctionText} data={data} />
        <HyperText propFunction={highFunction} data={data} />
      </CardContent>
    </Card>
  );
}
