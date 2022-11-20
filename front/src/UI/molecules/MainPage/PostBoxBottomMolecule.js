import { Box } from "@mui/system";
import React from "react";
import HeartIcon from "../../atoms/MainPage/HeartIcon";
import { Link } from "react-router-dom";
import Api from "../../../api/Api";

function PostBoxBottomMolecule({ id, member, memberImage, likes, hits, link }) {
    const Heart = async () => {
        await Api.postLikePost(id);

        window.location.reload();
    };
    return (
        <Box
            sx={{
                borderTop: "1px solid #F1F3F5",
                display: "flex",
                justifyContent: "space-between",
                padding: 1.5,
            }}
        >
            <span>
                by <b>{member}</b>
            </span>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    minWidth: "130px",
                }}
            >
                <HeartIcon fontSize="small" onClick={Heart} />
                &nbsp;{likes}
                <span style={{ marginLeft: "20%" }}>조회수 : {hits}</span>
            </Box>
        </Box>
    );
}

export default PostBoxBottomMolecule;
