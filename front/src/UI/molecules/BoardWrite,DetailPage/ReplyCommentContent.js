import { Box, Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Api from "../../../api/Api";
import CommentWriteBox from "./CommentWriteBox";

function ReplyCommentContent(props) {
    const [display, setDisplay] = useState(false);
    const [type, setType] = useState("submit");
    const notLoginAlert = () => {
        alert("로그인 하셔야 댓글을 작성하실 수 있습니다.");
        document.activeElement.blur();
    };

    const {
        writter,
        written,
        context,
        id,
        postid,
        userId,
        setIsOpen,
        isOpen,
        key,
    } = props;
    const setCommentWriteBox = (type) => {
        if (isOpen == id) {
            setDisplay(false);
            setIsOpen("0");
        } else {
            setDisplay(true);
            setIsOpen(id);
        }
        setType(type);
        if (type == "modify") {
            setCommentCotent(context);
        }
    };
    useEffect(() => {
        if (isOpen != id) {
            setDisplay(false);
        }
    }, [isOpen]);
    const [commentContent, setCommentCotent] = useState("");
    const modifyComment = useCallback(async () => {
        if (commentContent == "") alert("내용을 입력하세요.");
        else {
            setDisplay(!display);
            setIsOpen("0");
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
    const isAuthor = sessionStorage.getItem("userId");
    const deleteComment = async () => {
        await Api.deleteComment(id);
        window.location.reload();
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "0.3%",
                paddingBottom: "0.7%",
                borderBottom: "1px solid lightgray",
                marginLeft: "1.5%",
            }}
        >
            <Box
                sx={{
                    display: "block",
                    marginBottom: "2%",
                }}
            >
                <span style={{ marginBottom: "1%" }}>
                    {writter}&nbsp;
                    {`(${written})`}
                </span>
                <Box
                    sx={{
                        display: "flex",
                        width: "full",
                        justifyContent: "flex-end",
                        marginTop: "-20px",
                    }}
                >
                    {userId == isAuthor && context != "삭제된 댓글입니다." && (
                        <Button
                            sx={{
                                width: "20px",
                                color: "gray",
                                padding: 0,
                            }}
                            id={id}
                            onClick={() => setCommentWriteBox("modify")}
                        >
                            수정
                        </Button>
                    )}
                    {userId == isAuthor && context != "삭제된 댓글입니다." && (
                        <Button
                            sx={{
                                width: "20px",
                                color: "red",
                                padding: 0,
                            }}
                            id={id}
                            onClick={deleteComment}
                        >
                            삭제
                        </Button>
                    )}
                </Box>
            </Box>
            <span style={{ maxWidth: "89%", whiteSpace: "pre-wrap" }}>
                {context}
            </span>
            {display && (
                <CommentWriteBox
                    modifyComment={modifyComment}
                    onChange={onChangeCommentContent}
                    display={"flex"}
                    value={commentContent}
                    type={type}
                    onFocus={notLoginAlert}
                    key={key}
                ></CommentWriteBox>
            )}
        </Box>
    );
}

export default ReplyCommentContent;
