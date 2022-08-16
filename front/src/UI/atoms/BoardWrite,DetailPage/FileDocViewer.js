import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function FileViewer(props) {
  const { prv, width, height } = props;
  const docs = [{ uri: `${prv}` }];
  return (
    <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      style={{ width: width, height: height }}
      config={{
        header: {
          disableHeader: true,
        },
      }}
    />
  );
}

export default FileViewer;
