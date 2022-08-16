import { Box } from '@mui/material';
import React, { useState } from 'react';
import CommentWriteBox from '../../molecules/BoardWrite,DetailPage/CommentWriteBox';
import CommentContent from '../../molecules/BoardWrite,DetailPage/CommentContent';

function Comment(props) {
  const { comment, postid } = props;
  const [commentContent, setCommentCotent] = useState('');
  const [isOpen, setIsOpen] = useState('0');
  const test = (e) => {
    console.log(`isOpen:${e}`);
    setIsOpen(e);
  };
  console.log(isOpen);
  const onChangeCommentContent = (e) => {
    const content = e.target.value;
    setCommentCotent(content);
  };
  const submitComment = (e) => {
    //서버에 댓글 전송하는 로직
    console.log({
      postId: postid,
      userId: '0',
      upperCommentId: '0',
      context: commentContent,
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
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {comment.map((comment) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              order: comment.upper == '0' ? comment.id : comment.upper,
              marginBottom: '0.3%',
              paddingBottom: '0.7%',
              marginLeft: `${comment.upper == '0' ? '0' : '1.5%'}`,
              borderBottom: '1px solid lightgray',
            }}
            id={comment.id}
          >
            <CommentContent
              writter={comment.writter}
              written={comment.written}
              context={comment.context}
              id={comment.id}
              upper={comment.upper != '0' ? comment.upper : comment.id}
              postid={postid}
              isBlocked={comment.upper != '0' ? false : true} //isBlocked가 필요한가?
              setIsOpen={test}
              isOpen={isOpen}
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
