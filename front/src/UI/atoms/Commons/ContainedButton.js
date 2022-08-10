import * as React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButton(props) {
  const { style, content, fontSize, handleClick } = props;
  return (
    <Button variant="contained" style={{ fontFamily: "SUIT-Regular" }} sx={{ fontSize: fontSize }} color="secondary" size="small" onClick={() => handleClick()}>
      {content}
    </Button>
  );
}
