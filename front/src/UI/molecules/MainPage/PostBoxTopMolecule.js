import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PostBoxTopMolecule(props) {
    const { id, link } = props;
    return (
        /* 가시성 때문에 padding 설정함.*/
        <Box sx={{ padding: 1.5 }}>
            <Link to={`/${link}/${id}`}>
                <img />
            </Link>
        </Box>
    );
}

export default PostBoxTopMolecule;
