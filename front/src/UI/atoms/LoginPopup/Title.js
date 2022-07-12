import * as React from 'react';
import { Typography } from '@mui/material'

const TitleText = (props) => {
    const title = props.title;

    return (
        <Typography variant="h4" component="h4" sx={{ textAlign: 'center' }}>{title}</Typography >
    )
}

export default TitleText