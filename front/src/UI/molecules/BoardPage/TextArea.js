import * as React from 'react';
import { Card, TextareaAutosize } from '@mui/material';

export default function TextArea(props) {
  return (
    <Card sx={{}}>
      {props.countList &&
        props.countList.map((item, i) => (
          <TextareaAutosize
            key={i}
            aria-label="minimum height"
            minRows={3}
            style={{ width: 200, minHeight: 70 }}
          />
        ))}
    </Card>
  );
}
