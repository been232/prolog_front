import * as React from 'react';
import { Card } from '@mui/material';

export default function HyperLink(props) {
  const list = props.list;

  return (
    <Card
      key={list.id}
      sx={{
        position: 'absolute',
        width: list.width,
        height: list.height,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        top: list.coordinateY,
        left: list.coordinateX,
        type: list.type,
        border: 1,
        paddingTop: 1,
      }}
    >
      <a target="_blank" href= {list.content}> {list.content}</a>
    </Card>
  );
}
