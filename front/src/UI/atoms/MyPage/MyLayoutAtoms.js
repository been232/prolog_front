import { Box, Button, IconButton, Modal } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PostBoxBottomMolecule from '../../molecules/MainPage/PostBoxBottomMolecule';
import PostBoxMiddleMolecule from '../../molecules/MainPage/PostBoxMiddleMolecule';
import PostBoxTopMolecule from '../../molecules/MainPage/PostBoxTopMolecule';
import CloseIcon from '@mui/icons-material/Close';
// import { useInterval } from './useInterval';

function MyLayoutAtoms(props) {
    const { id, name } = props.data;

    return (
        <Box
            sx={{
                boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 16px 0px',
                display: 'flex',
                flexDirection: 'column',
            }}
            style={{ fontFamily: "SUIT-Regular" }}
        >
            <PostBoxMiddleMolecule title={name} id={id} link="Layout"  />
        </Box>
    );
}

export default MyLayoutAtoms;
