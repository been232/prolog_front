import React from "react";
import Button from "@mui/material/Button";

export default function SubmitButton(props) {
    const { style, content, onClick } = props;
    return (
        <Button
            style={{ fontFamily: "SUIT-Regular" }}
            variant="outlined"
            sx={style}
            onClick={onClick}
        >
            {content}
        </Button>
    );
}
