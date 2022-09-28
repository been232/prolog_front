import { Box, Button } from '@mui/material';
import React from 'react';
import Api from '../../../api/Api';

function ReplyCommentContent(props) {
  const { writter, written, context, id, postid, userId } = props;
  const isAuthor = 1;
  const deleteComment = async () => {
    await Api.deleteComment(id);
    window.location.reload();
  };

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
      <Box
        sx={{
          display: 'block',
          position: 'relative',
          marginBottom: '2%',
        }}
      >
        <span style={{ marginBottom: '1%' }}>
          {writter}&nbsp;
          {`(${written})`}
        </span>
        {userId == isAuthor && (
          <Button
            sx={{
              width: '20px',
              position: 'absolute',
              left: '90%',
              color: 'red',
            }}
            id={id}
            onClick={deleteComment}
          >
            삭제
          </Button>
        )}
      </Box>
      <span style={{ maxWidth: '89%', whiteSpace: 'pre-wrap' }}>{context}</span>
    </Box>
  );
}

export default ReplyCommentContent;
