import * as React from 'react';
import { Button } from '@mui/material'

const ModalButton = (props) => {
    const value = props.value;
    const handleOpen = props.handleOpen;
    const direct = props.direct;

    return (
        <Button color="secondary" variant="contained" size="small" sx={{ float: direct }} onClick={(event) => handleOpen()}>{value}</Button>
    )
}

export default ModalButton