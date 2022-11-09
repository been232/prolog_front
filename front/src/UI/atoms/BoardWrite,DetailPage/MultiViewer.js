import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileViewer from "react-file-viewer";
function MultiViewer(props) {
    console.log(props);
    const { data } = props;
    const { board } = data;
    const [file, setFile] = useState("");
    const [type, setType] = useState("");
    const size = data.content.split(".").length;
    const d = data.content.split(".")[size - 1];

    useEffect(() => {
        if (data.content !== "") {
            setFile(data.content);
            setType(d);
        }
    }, []);

    const getFile = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        if (e.target.files[0]) {
            fileReader.readAsDataURL(e.target.files[0]);
        }

        fileReader.onload = () => {
            setFile(fileReader.result);
            setType(fileReader.result.split("/")[1].split(";")[0]);
        };
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
                    </div>
                </>
            )}
            {file != "" && (
                <FileViewer fileType={type} filePath={file}></FileViewer>
            )}
        </Box>
    );
}

export default MultiViewer;
