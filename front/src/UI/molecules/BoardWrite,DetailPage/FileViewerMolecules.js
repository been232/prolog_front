import React, { useState } from 'react';

import { Box } from '@mui/material';
import FileViewer from '../../atoms/BoardWrite,DetailPage/FileDocViewer';
function FileViewerMolecule(props) {
  const [prv, setPrv] = useState('');
  console.log(props);
  const data = props.data;
  const board = data.board;
  const getFile = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      setPrv(fileReader.result);
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
            style={{ display: 'none' }}
          />
          <div>
            <button onClick={() => inputRef.click()}>파일 등록</button>
          </div>
        </>
      )}

      <FileViewer
        prv={prv}
        width={data.width}
        height={data.height}
      ></FileViewer>
    </Box>
  );
}

export default FileViewerMolecule;