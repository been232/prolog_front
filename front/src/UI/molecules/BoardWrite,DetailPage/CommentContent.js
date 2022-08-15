import { Button } from '@mui/material';
import React, { useState } from 'react';
import CommentWriteBox from './CommentWriteBox';

function CommentContent(props) {
  const { writter, written, context, id, onClick, onChange } = props;

  const [display, setDisplay] = useState(false);

  const setCommentWriteBox = () => {
    setDisplay(!display);
  };
  return (
    <>
      <span>
        {writter}&nbsp;
        {`(${written})`}
      </span>
      <span style={{ whiteSpace: 'pre-wrap' }}>{context}</span>
      <Button
        sx={{ width: '20px', marginLeft: '96%', marginTop: '-2%' }}
        id={id}
        onClick={setCommentWriteBox}
      >
        답글
      </Button>
      {display && (
        <CommentWriteBox
          onClick={onClick}
          onChange={onChange}
          display={'flex'}
        ></CommentWriteBox>
      )}
    </>
  );
}

export default CommentContent;
