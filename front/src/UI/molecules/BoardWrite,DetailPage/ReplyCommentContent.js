import { Box } from '@mui/material';
import React from 'react';

function ReplyCommentContent(props) {
  const { writter, written, context, id, postid } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.3%',
        paddingBottom: '0.7%',
        borderBottom: '1px solid lightgray',
        marginLeft: '1.5%',
      }}
    >
      <span style={{ marginBottom: '1%' }}>
        {writter}&nbsp;
        {`(${written})`}
      </span>
      <span style={{ maxWidth: '89%', whiteSpace: 'pre-wrap' }}>{context}</span>
    </Box>
  );
}

export default ReplyCommentContent;
