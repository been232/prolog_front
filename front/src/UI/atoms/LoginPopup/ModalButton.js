import * as React from 'react';
import { Button } from '@mui/material'

const ModalButton = (props) => {
    const value = props.value;
    const handleOpen = props.handleOpen;

    return (
        <Button color="success" variant="outlined" size="small" sx={{ float: "right" }} onClick={(event) => handleOpen()}>{value}</Button>
    )
}

export default ModalButton