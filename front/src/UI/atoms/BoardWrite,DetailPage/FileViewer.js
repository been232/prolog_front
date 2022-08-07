import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import FileViewer from 'react-file-viewer';
import { Box } from '@mui/material';
function MyFileViewer() {
  const getFile = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      const imf = e.target.files[0];
      const prv = fileReader.result;
      console.log(e.target.files);
    };
  };
  const docs = [{ uri: require('../../../testFile/Prolog.pptx') }];
  let inputRef;
  return (
    <Box>
      <input
        type="file"
        onChange={getFile}
        ref={(refParam) => (inputRef = refParam)}
      />
      <div>
        <button onClick={() => inputRef.click()}>파일 등록</button>
      </div>
      <FileViewer fileType="pdf" filePath="../../../testFile/mobile.pdf" />
    </Box>
  );
}

export default MyFileViewer;
