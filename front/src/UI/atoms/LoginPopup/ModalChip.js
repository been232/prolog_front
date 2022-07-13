import * as React from 'react';
import { Chip } from '@mui/material';

const ModalChip = (props) => {
  const { value, handleOpen, direct } = props;
  return (
    <Chip
      color="success"
      variant="outlined"
      size="small"
      sx={{ float: direct }}
      onClick={(event) => handleOpen()}
    >
      {value}
    </Chip>
  );
};

export default ModalChip;
