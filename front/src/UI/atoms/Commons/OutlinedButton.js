import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function OutlineButton(props) {
  const { style, content, onClick, href } = props;
  return (
    <Button
      style={{ fontFamily: 'SUIT-Regular' }}
      variant="outlined"
      sx={style}
      href={href}
    >
      {content}
    </Button>
  );
}
