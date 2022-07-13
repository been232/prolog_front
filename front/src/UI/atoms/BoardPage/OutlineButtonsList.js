import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function OutlinedButtonsList(props) {
  const { style, content, pathname } = props;
  return (
    <Link to={pathname}>
      <Button variant="outlined" sx={style}>
        {content}
      </Button>
    </Link>
  );
}
