import React from "react";

import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../images/card-img.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        borderRadius: 10
    },
    media: {
        height: 350,
    },
}));


const ImageCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} raised={true}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
            />
        </Card>
    )
};

export default ImageCard;
