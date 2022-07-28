import * as React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButton(props) {
  const { style, content, fontSize } = props;
  return (
    <Button variant="contained" sx={{ fontSize: fontSize }} color="secondary" size="small">
      {content}
    </Button>
  );
}
