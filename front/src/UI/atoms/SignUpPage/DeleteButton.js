import * as React from 'react';
import { Button } from '@mui/material'

const DeleteButton = (props) => {
    const value = props.value;
    const handleDeleteImage = props.handleDeleteImage;
    const direct = props.direct;

    return (
        <Button color="secondary" variant="contained" size="small" sx={{ float: direct }} onClick={(event) => handleDeleteImage()}>{value}</Button>
    )
}

export default DeleteButton