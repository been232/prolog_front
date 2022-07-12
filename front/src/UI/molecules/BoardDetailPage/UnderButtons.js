import * as React from 'react';
import OutlineButtonDelete from '../../atoms/BoardDetailPage/OutlineButtonDelete';
import OutlinedButtonsList from '../../atoms/BoardDetailPage/OutlineButtonsList';
import OutlineButtonCancel from '../../atoms/BoardDetailPage/OutlineButtonCancel';

import { Box } from '@mui/material';

export default function UnderButtons() {
  return (
    <Box sx={{float: 'right'}}>
      <OutlineButtonCancel />
      <OutlineButtonDelete />
      <OutlinedButtonsList />
    </Box>
  );
}
