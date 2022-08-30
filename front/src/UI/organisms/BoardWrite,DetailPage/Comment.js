import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommentWriteBox from '../../molecules/BoardWrite,DetailPage/CommentWriteBox';
import CommentContent from '../../molecules/BoardWrite,DetailPage/CommentContent';
import ReplyCommentContent from '../../molecules/BoardWrite,DetailPage/ReplyCommentContent';

function Comment(props) {
  const { comment, postid } = props;
  const [commentContent, setCommentCotent] = useState('');
  const [isOpen, setIsOpen] = useState('0');
  const test = (e) => {
    setIsOpen(e);
  };
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
    const blank = '';
    setCommentCotent(blank);
    setIsOpen('0');
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
        {comment.data.map((comment) => (
          <>
            <CommentContent
              writter={comment.nickname}
              written={comment.time}
              context={comment.context}
              id={comment.id}
              upper={comment.upper != '0' ? comment.upper : comment.id}
              postid={postid}
              isBlocked={comment.upper != '0' ? false : true} //isBlocked가 필요한가?
              setIsOpen={test}
              isOpen={isOpen}
            ></CommentContent>
            {comment.lowerComments &&
              comment.lowerComments.map((reply) => (
                <ReplyCommentContent
                  writter={reply.nickname}
                  written={reply.time}
                  id={reply.id}
                  context={reply.context}
                ></ReplyCommentContent>
              ))}
          </>
        ))}
      </Box>
      {isOpen == '0' && (
        <CommentWriteBox
          onChange={onChangeCommentContent}
          onClick={submitComment}
          display={'flex'}
          value={commentContent}
        ></CommentWriteBox>
      )}
    </Box>
  );
}

export default Comment;
