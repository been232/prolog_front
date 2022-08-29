import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommentWriteBox from './CommentWriteBox';

function CommentContent(props) {
  const {
    writter,
    written,
    context,
    id,
    upper,
    postid,
    isBlocked,
    setIsOpen,
    isOpen,
  } = props;

  const [display, setDisplay] = useState(false);

  const setCommentWriteBox = () => {
    if (isOpen == id) {
      setDisplay(false);
      console.log(`display ${id}:${display}`);
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
  const submitComment = (e) => {
    setDisplay(!display);
    //서버에 댓글 전송하는 로직
    console.log({
      postId: postid,
      userId: '0',
      upperCommentId: upper,
      context: commentContent,
    });
  };
  return (
    <>
      <span style={{ marginBottom: '1%' }}>
        {writter}&nbsp;
        {`(${written})`}
      </span>
      <span style={{ maxWidth: '89%', whiteSpace: 'pre-wrap' }}>{context}</span>
      {isBlocked && (
        <Button
          sx={{ width: '20px', marginLeft: '96%', marginTop: '-3%' }}
          id={id}
          onClick={setCommentWriteBox}
        >
          답글
        </Button>
      )}
      {display && (
        <CommentWriteBox
          onClick={submitComment}
          onChange={onChangeCommentContent}
          display={'flex'}
        ></CommentWriteBox>
      )}
    </>
  );
}

export default CommentContent;