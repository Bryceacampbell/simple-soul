import React from 'react';
import { Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const ListItem = ({ name, review }) => {

    return (
        <>
            <FormatQuoteIcon style={{ fontSize: 40 }} />
            <Typography variant='h5'>{name}</Typography>
            <Typography variant='h6'>{review}</Typography>
        </>
    )
};

export default ListItem;