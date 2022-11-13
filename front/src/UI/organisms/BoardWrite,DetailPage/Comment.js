import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CommentWriteBox from "../../molecules/BoardWrite,DetailPage/CommentWriteBox";
import CommentContent from "../../molecules/BoardWrite,DetailPage/CommentContent";
import ReplyCommentContent from "../../molecules/BoardWrite,DetailPage/ReplyCommentContent";
import Api from "../../../api/Api";

function Comment(props) {
    const { id } = props;
    const [commentContent, setCommentCotent] = useState("");
    const [isOpen, setIsOpen] = useState("0");
    const [comment, setComment] = useState([]);

    const notLoginAlert = () => {
        alert("로그인 하셔야 댓글을 작성하실 수 있습니다.");
        document.activeElement.blur();
    };

    const isAuthor = sessionStorage.getItem("userId");

    useEffect(() => {
        const getData = async () => {
            const commentBody = await Api.getComment(id);
            setComment(commentBody.data.data);
        };
        getData();
    }, []);
    const setOpen = (e) => {
        setIsOpen(e);
    };
    const onChangeCommentContent = (e) => {
        const content = e.target.value;
        setCommentCotent(content);
    };
    const submitComment = useCallback(async (e) => {
        if (commentContent == "") alert("내용을 입력하세요.");
        else {
            const comment = {
                postId: id,
                upperCommentId: null,
                context: commentContent,
            };
            await Api.postComment(comment);

            const blank = "";
            setCommentCotent(blank);
            setIsOpen("0");
            window.location.reload();
        }
    });
    return (
        <Box
            sx={{
                display: "flex",
                width: "90%",
                marginTop: "1%",
                marginBottom: "30%",
                marginLeft: "5%",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <span>댓글</span>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {comment &&
                    comment.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <CommentContent
                                    writter={comment.nickname}
                                    written={comment.time}
                                    context={comment.context}
                                    id={comment.id}
                                    postId={id}
                                    setIsOpen={setOpen}
                                    isOpen={isOpen}
                                    userId={comment.userId}
                                ></CommentContent>
                                {comment.lowerComments &&
                                    comment.lowerComments.map((reply) => (
                                        <div key={reply.id}>
                                            <ReplyCommentContent
                                                writter={reply.nickname}
                                                written={reply.time}
                                                id={reply.id}
                                                context={reply.context}
                                                userId={reply.userId}
                                                setIsOpen={setOpen}
                                                isOpen={isOpen}
                                            ></ReplyCommentContent>
                                        </div>
                                    ))}
                            </div>
                        );
                    })}
            </Box>
            {isOpen == "0" && (
                <CommentWriteBox
                    onChange={onChangeCommentContent}
                    submitComment={submitComment}
                    display={"flex"}
                    value={commentContent}
                    type={"submit"}
                    onFocus={isAuthor ? Object : notLoginAlert}
                ></CommentWriteBox>
            )}
        </Box>
    );
}

export default React.memo(Comment);
