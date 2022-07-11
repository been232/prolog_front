import { Box } from '@mui/material';
import React from 'react';
import ImageListItem from '../../molecules/LayoutPage/ImageListItem';
import ImageListAccordion from '../../organisms/LayoutPage/ImageListAccordion';

function LayoutPage() {
  return (
    <Box sx={{ marginLeft: 20, marginRight: 20 }}>
          {/* <ImageListItem></ImageListItem> */}
          <ImageListAccordion />
    </Box>
  );
}

export default LayoutPage;
