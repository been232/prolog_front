import * as React from 'react';
import { Typography } from '@mui/material'

const TitleText = (props) => {
    const title = props.title;

    return (
        <Typography variant="h5" component="h5" sx={{ textAlign: 'center' }}>{title}</Typography >
    )
}

export default TitleText