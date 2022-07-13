import * as React from 'react';
import { Typography } from '@mui/material';

const TitleText = (props) => {
  const { title } = props;
  return (
    <Typography variant="h5" component="h5" sx={{ textAlign: 'center' }}>
      {title}
    </Typography>
  );
};

export default TitleText;
