import React from "react";
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        borderRadius: 10
    },
    media: {
        height: 350,
    },
}));


const ListItem = ({img}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} raised={true}>
            <CardMedia
                className={classes.media}
                image={img}
            />
        </Card>
    )
};

export default ListItem;