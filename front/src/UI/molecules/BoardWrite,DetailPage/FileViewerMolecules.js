import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import FileViewer from "../../atoms/BoardWrite,DetailPage/FileDocViewer";
import Api from "../../../api/Api";
function FileViewerMolecule(props) {
    const data = props.data;
    // const board = data.board;
    const { board } = data;
    const [prv, setPrv] = useState("");
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    console.log(prv);
    useEffect(() => {
        data.content != "" && setPrv(data.content);
    }, []);
    const sendFiles = async (files) => {
        const infobody = await Api.postFiles(files);
        setUrl(infobody.data.data[0].url);
        setName(infobody.data.data[0].name);
        console.log(infobody);
        data.content = infobody.data.data[0].url;
        setPrv(data.content);
        return data.content;
    };
    const getFile = async (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        if (e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0]);
        }
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        sendFiles(formData);
        e.target.value = "";
    };
    const deleteFiles = async () => {
        await Api.deleteFiles(name);
        setPrv("");
    };

    let inputRef;

    return (
        <Box>
            {board == true ? (
                <></>
            ) : (
                <>
                    <input
                        type="file"
                        onChange={getFile}
                        ref={(refParam) => (inputRef = refParam)}
                        style={{ display: "none" }}
                    />
                    <div>
                        <button onClick={() => inputRef.click()}>
                            파일 등록
                        </button>
                        <button onClick={deleteFiles}>파일 삭제</button>
                    </div>
                </>
            )}
            {prv != "" && (
                <FileViewer prv={prv} width={1024} height={720}></FileViewer>
            )}
        </Box>
    );
}

export default FileViewerMolecule;
