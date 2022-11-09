import { Box } from "@mui/material";
import React from "react";
import SubmitButton from "../../atoms/Commons/SubmitButton";
function CommentWriteBox(props) {
    const {
        onChange,
        modifyComment,
        submitComment,
        display,
        value,
        type,
        onFocus,
    } = props;
    const onClick = type == "submit" ? submitComment : modifyComment;
    return (
        <Box
            sx={{
                display: display,
                width: "100%",
                justifyContent: "center",
            }}
        >
            <textarea
                style={{
                    width: "90%",
                    height: "5em",
                    minHeight: "66px",
                    marginTop: "1%",
                    marginBottom: "1%",
                    resize: "vertical",
                    outlineColor: "#BADBF3",
                }}
                onChange={onChange}
                value={value}
                onClick={onFocus}
            ></textarea>
            <SubmitButton
                content={"댓글입력"}
                style={{
                    marginBottom: "1%",
                    marginTop: "1%",
                    marginLeft: "1%",
                    maxHeight: "5em",
                    padding: 0,
                }}
                onClick={onClick}
            ></SubmitButton>
        </Box>
    );
}
export default CommentWriteBox;
