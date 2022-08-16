import React, { useState } from 'react';

import { Box } from '@mui/material';
import FileViewer from '../../atoms/BoardWrite,DetailPage/FileDocViewer';
function FileViewerMolecule() {
  const [prv, setPrv] = useState('');

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
      <input
        type="file"
        onChange={getFile}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: 'none' }}
      />
      <div>
        <button onClick={() => inputRef.click()}>파일 등록</button>
      </div>
      <FileViewer prv={prv}></FileViewer>
    </Box>
  );
}

export default FileViewerMolecule;
