import * as React from 'react';
import { Chip } from '@mui/material'

const ModalChip = (props) => {
    const value = props.value;
    const handleOpen = props.handleOpen;
    const direct = props.direct;

    return (
        <Chip color="success" variant="outlined" size="small" sx={{ float: direct }} onClick={(event) => handleOpen()}>{value}</Chip >
    )
}

export default ModalChip