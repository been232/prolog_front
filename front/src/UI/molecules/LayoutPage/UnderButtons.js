import * as React from 'react';
import OutlineButtonDelete from '../../atoms/LayoutPage/OutlineButtonDelete';
import OutlinedButtonsList from '../../atoms/LayoutPage/OutlineButtonsList';
import { Box } from '@mui/material';

export default function UnderButtons() {
  return (
    <Box sx={{float: 'right'}}>
      <OutlineButtonDelete />
      <OutlinedButtonsList />
    </Box>
  );
}
