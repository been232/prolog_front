import * as React from 'react';
import { Button } from '@mui/material';

const ModalButton = (props) => {
  const { value, handleOpen, direct } = props;
  return (
    <Button
      color="secondary"
      variant="contained"
      size="small"
      sx={{ float: direct }}
      onClick={(event) => handleOpen()}
    >
      {value}
    </Button>
  );
};

export default ModalButton;
