import React from "react";

import { Card, CardMedia, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        borderRadius: 10
    },
    media: {
        height: '100%',
    },
}));


const ImageCard = ({ image, title, height }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} raised={true}>
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
                style={{ height: height }}
            />
        </Card>
    )
};

export default ImageCard;
