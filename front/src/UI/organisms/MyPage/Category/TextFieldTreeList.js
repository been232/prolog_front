import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { makeStyles } from "@mui/styles";
import { Box, TextField } from '@mui/material';

const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400
    },
    inputInput: {
      padding: "4px 8px"
    }
  });

export default function TreeList() {
    const classes = useStyles();
    const [value, setValue] = React.useState("Custom item");
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <TreeItem
                nodeId="2"
                label={
                    <TextField
                        value={value}
                        variant="outlined"
                        InputProps={{ classes: { input: classes.inputInput } }}
                        onChange={handleChange}
                    />
                }
            />
            <TreeItem nodeId="0" label="전체" />
            <TreeItem nodeId="1" label="웹">
                <TreeItem nodeId="2" label="React" />
                <TreeItem nodeId="3" label="NodeJS" />
            </TreeItem>
            <TreeItem nodeId="4" label="앱" />
        </TreeView>
    );
}
