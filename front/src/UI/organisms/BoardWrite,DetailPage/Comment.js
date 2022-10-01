import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import CommentWriteBox from '../../molecules/BoardWrite,DetailPage/CommentWriteBox';
import CommentContent from '../../molecules/BoardWrite,DetailPage/CommentContent';
import ReplyCommentContent from '../../molecules/BoardWrite,DetailPage/ReplyCommentContent';
import Api from '../../../api/Api';

function Comment(props) {
  const { id } = props;
  const [commentContent, setCommentCotent] = useState('');
  const [isOpen, setIsOpen] = useState('0');
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const commentBody = await Api.getComment(id);
      console.log(commentBody.data.data);
      setComment(commentBody.data.data);
    };
    getData();
  }, []);
  const test = (e) => {
    setIsOpen(e);
  };
  const onChangeCommentContent = (e) => {
    const content = e.target.value;
    setCommentCotent(content);
  };
  const submitComment = useCallback(async (e) => {
    if (commentContent == '') alert('내용을 입력하세요.');
    else {
      const comment = {
        postId: id,
        upperCommentId: null,
        context: commentContent,
      };
      await Api.postComment(comment);

      const blank = '';
      setCommentCotent(blank);
      setIsOpen('0');
      window.location.reload();
    }
  });
  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        marginTop: '1%',
        marginBottom: '30%',
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
        {comment &&
          comment.map((comment) => {
            const upperId = comment.id;
            return (
              <>
                <CommentContent
                  writter={comment.nickname}
                  written={comment.time}
                  context={comment.context}
                  id={comment.id}
                  upper={comment.upper != '0' ? comment.upper : comment.id}
                  postId={id}
                  setIsOpen={test}
                  isOpen={isOpen}
                  key={comment.id}
                  userId={comment.userId}
                ></CommentContent>
                {comment.lowerComments &&
                  comment.lowerComments.map((reply) => (
                    <ReplyCommentContent
                      writter={reply.nickname}
                      written={reply.time}
                      id={reply.id}
                      context={reply.context}
                      key={reply.id}
                      userId={reply.userId}
                      setIsOpen={test}
                      isOpen={isOpen}
                    ></ReplyCommentContent>
                  ))}
              </>
            );
          })}
      </Box>
      {isOpen == '0' && (
        <CommentWriteBox
          onChange={onChangeCommentContent}
          submitComment={submitComment}
          display={'flex'}
          value={commentContent}
          type={'submit'}
        ></CommentWriteBox>
      )}
    </Box>
  );
}

export default React.memo(Comment);
