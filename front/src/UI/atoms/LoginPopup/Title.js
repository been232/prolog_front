import * as React from 'react';
import { Typography } from '@mui/material';

const TitleText = (props) => {
  const { title, direction, size, fontWeight } = props;
  return (
    <Typography variant={size} component={size}
      sx={{ textAlign: direction, fontWeight: fontWeight }}>
      {title}
    </Typography>
  );
};

export default TitleText;
