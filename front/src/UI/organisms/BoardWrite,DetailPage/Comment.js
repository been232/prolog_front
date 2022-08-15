import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { SearchTextField } from '../../atoms/Commons/TextField';
import OutlineButton from '../../atoms/Commons/OutlinedButton';
import CommentWriteBox from '../../molecules/BoardWrite,DetailPage/CommentWriteBox';
import CommentContent from '../../molecules/BoardWrite,DetailPage/CommentContent';

function Comment(props) {
  const { comment } = props;
  const [commentContent, setCommentCotent] = useState('');

  const onChangeCommentContent = (e) => {
    const content = e.target.value;
    console.log(content);
    setCommentCotent(content);
  };
  const submitComment = (e) => {
    //서버에 댓글 전송하는 로직
    console.log({
      postId: '1',
      userId: 'userId',
      upperCommentId: '0',
      context: 'comment contents',
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        marginTop: '1%',
        marginBottop: '1%',
        marginLeft: '5%',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <span>댓글</span>
      <Box
        sx={{
          // borderBottom: '1px solid black',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {comment.map((comment, index) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              order: comment.upper == '0' ? comment.id : comment.upper,
              marginBottom: '0.3%',
              marginLeft: `${comment.upper == '0' ? '0' : '1%'}`,
              // marginRight: '5%',
              borderBottom: '1px solid black',
            }}
            id={comment.id}
          >
            {/* <span>
              {comment.writter}&nbsp;
              {`(${comment.written})`}
            </span>
            <span style={{ whiteSpace: 'pre-wrap' }}>{comment.context}</span>
            <Button
              sx={{ width: '20px', marginLeft: '96%', marginTop: '-2%' }}
              id={comment.id}
              onClick={setCommentWriteBox}
            >
              답글
            </Button> */}
            <CommentContent
              writter={comment.writter}
              written={comment.written}
              context={comment.context}
              id={comment.id}
              onChange={onChangeCommentContent}
              onClick={submitComment}
            ></CommentContent>
          </Box>
        ))}
      </Box>
      <CommentWriteBox
        onChange={onChangeCommentContent}
        onClick={submitComment}
        display={'flex'}
      ></CommentWriteBox>
    </Box>
  );
}

export default Comment;
