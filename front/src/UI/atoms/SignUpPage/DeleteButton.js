import * as React from 'react';
import { Button } from '@mui/material';

const DeleteButton = (props) => {
  const { value, handleDeleteImage, direct, fontSize, cursor } = props;
  return (
    <Button
      color="secondary"
      variant="contained"
      size="small"
      sx={{ float: direct, fontSize: fontSize, cursor: cursor }}
      onClick={(event) => handleDeleteImage()}
    >
      {value}
    </Button>
  );
};

export default DeleteButton;
