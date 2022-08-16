import React, { useState } from 'react';

import { Box } from '@mui/material';
import { maxHeight } from '@mui/system';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
function MyFileViewer() {
  const [prv, setPrv] = useState('');
  const getFile = (e) => {
    // console.log(e.target.files);
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      // imf = e.target.files[0];
      setPrv(fileReader.result);
    };
  };

  const docs = [{ uri: `${prv}` }];
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
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ width: 1000, height: 800 }}
        config={{
          header: {
            disableHeader: true,
          },
        }}
      />
    </Box>
  );
}

export default MyFileViewer;
