import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function FileViewer(props) {
  const { prv } = props;
  const docs = [{ uri: `${prv}` }];
  return (
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
  );
}

export default FileViewer;
