import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Position } from 'react-flow-renderer';
import Api from '../../../api/Api';
import CommentWriteBox from './CommentWriteBox';

function CommentContent(props) {
  const {
    writter,
    written,
    context,
    id,
    postId,
    isBlocked,
    setIsOpen,
    isOpen,
    userId,
  } = props;
  const [display, setDisplay] = useState(false);
  const isAuthor = 1;
  const setCommentWriteBox = () => {
    if (isOpen == id) {
      setDisplay(false);
      setIsOpen('0');
    } else {
      setDisplay(true);
      setIsOpen(id);
    }
  };
  useEffect(() => {
    if (isOpen != id) {
      setDisplay(false);
    }
  }, [isOpen]);

  const [commentContent, setCommentCotent] = useState('');

  const onChangeCommentContent = (e) => {
    const content = e.target.value;
    setCommentCotent(content);
  };
  const submitComment = async (e) => {
    setDisplay(!display);
    setIsOpen('0');
    //서버에 댓글 전송하는 로직
    // console.log({
    //   postId: postid,
    //   userId: '0',
    //   upperCommentId: upper,
    //   context: commentContent,
    // });
    const comment = {
      postId: postId,
      upperCommentId: id,
      context: commentContent,
    };
    await Api.postComment(comment);
    window.location.reload();
  };

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
        <Button
          sx={{ width: '20px', position: 'absolute', left: '85%' }}
          id={id}
          onClick={setCommentWriteBox}
        >
          답글
        </Button>
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
      {display && (
        <CommentWriteBox
          onClick={submitComment}
          onChange={onChangeCommentContent}
          display={'flex'}
        ></CommentWriteBox>
      )}
    </Box>
  );
}

export default CommentContent;
