import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function TreeList() {

    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 200}}
        >
            <TreeItem nodeId="0" label="전체" />
            <TreeItem nodeId="1" label="웹">
                <TreeItem nodeId="2" label="React" />
                <TreeItem nodeId="3" label="NodeJS" />
            </TreeItem>
            <TreeItem nodeId="4" label="앱" />
        </TreeView>
    );
}
