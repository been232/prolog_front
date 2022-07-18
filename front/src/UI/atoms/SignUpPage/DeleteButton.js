import * as React from 'react';
import { Button } from '@mui/material';

const DeleteButton = (props) => {
  const { value, handleDeleteImage, direct } = props;
  return (
    <Button
      color="secondary"
      variant="contained"
      size="small"
      sx={{ float: direct }}
      onClick={handleDeleteImage()}
    >
      {value}
    </Button>
  );
};

export default DeleteButton;
