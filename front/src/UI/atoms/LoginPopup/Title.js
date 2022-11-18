import * as React from 'react';
import { Typography } from '@mui/material';

const TitleText = (props) => {
  const { title, direction, variant, component, fontWeight } = props;
  return (
    <Typography variant={variant} component={component}
      sx={{ textAlign: direction, fontWeight: fontWeight }} style={{ fontFamily: "SUIT-Regular" }}>
      {title}
    </Typography>
  );
};

export default TitleText;
