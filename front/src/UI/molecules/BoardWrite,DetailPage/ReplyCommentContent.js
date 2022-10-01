import { Box, Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import Api from '../../../api/Api';
import CommentWriteBox from './CommentWriteBox';

function ReplyCommentContent(props) {
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState('submit');
  const { writter, written, context, id, postid, userId, setIsOpen, isOpen } =
    props;
  const setCommentWriteBox = (type) => {
    if (isOpen == id) {
      setDisplay(false);
      setIsOpen('0');
    } else {
      setDisplay(true);
      setIsOpen(id);
    }
    setType(type);
    if (type == 'modify') {
      setCommentCotent(context);
    }
  };
  useEffect(() => {
    if (isOpen != id) {
      setDisplay(false);
    }
  }, [isOpen]);
  const [commentContent, setCommentCotent] = useState('');
  const modifyComment = useCallback(async () => {
    if (commentContent == '') alert('내용을 입력하세요.');
    else {
      setDisplay(!display);
      setIsOpen('0');
      const comment = {
        context: commentContent,
      };
      await Api.modifyComment(id, comment);
      window.location.reload();
    }
  }, [display, commentContent]);
  const onChangeCommentContent = useCallback((e) => {
    const content = e.target.value;
    setCommentCotent(content);
  }, []);
  const isAuthor = sessionStorage.getItem('userId');
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
        {userId == isAuthor && context != '삭제된 댓글입니다.' && (
          <Button
            sx={{
              width: '20px',
              position: 'absolute',
              left: '85%',
              color: 'gray',
            }}
            id={id}
            onClick={() => setCommentWriteBox('modify')}
          >
            수정
          </Button>
        )}
        {userId == isAuthor && context != '삭제된 댓글입니다.' && (
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
          modifyComment={modifyComment}
          onChange={onChangeCommentContent}
          display={'flex'}
          value={commentContent}
          type={type}
        ></CommentWriteBox>
      )}
    </Box>
  );
}

export default ReplyCommentContent;
