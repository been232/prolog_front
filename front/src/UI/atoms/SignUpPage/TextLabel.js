import * as React from 'react';
import { Typography } from '@mui/material';

const TextLabel = (props) => {
  const label = props.label;

  return (
    <Typography variant="h6" component="h5" sx={{ textAlign: 'center' }}>
      {label}
    </Typography>
  );
};

export default TextLabel;
