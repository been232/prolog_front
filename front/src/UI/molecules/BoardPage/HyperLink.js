import * as React from 'react';
import { Card } from '@mui/material';

export default function HyperLink(props) {
  const list = props.data;

  return (
    <Card
      key={list.id}
      sx={{
        width: list.width,
        height: list.height,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        type: list.type,
      }}
    >
      <a target="_blank" href={list.content}>
        {' '}
        {list.content}
      </a>
    </Card>
  );
}
