import * as React from 'react';
import OutlineButtonDelete from '../../atoms/BoardPage/OutlineButtonDelete';
import OutlinedButtonsList from '../../atoms/BoardPage/OutlineButtonsList';
import OutlineButtonCancel from '../../atoms/BoardPage/OutlineButtonCancel';

import { Box } from '@mui/material';

export default function UnderButtons() {
  return (
    <Box sx={{ float: 'right' }}>
      <OutlineButtonCancel />
      <OutlineButtonDelete />
      <OutlinedButtonsList
        content="목록으로"
        pathname="/"
        style="{ marginLeft: 2 }"
      />
    </Box>
  );
}
