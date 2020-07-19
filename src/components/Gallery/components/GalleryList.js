import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GalleryListItem from './GalleryListItem';

const gallery = [
    {id: 1, imgUrl: 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/109135306_337558323909161_2005087224939391288_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=mJTgZLKolA0AX8N0EyM&oh=6cd5934a826dc2711895cfa2eac896c3&oe=5F3BEAD7'},
    {id: 2, imgUrl: 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/107845315_746104409478067_845128011546920216_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=KbZwOtO1nTcAX84TKl3&oh=9f86e76067941aa2f859d8acb6014cfc&oe=5F3F0F27'},
    {id: 3, imgUrl: 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/108594909_574625826560705_1721125652431664825_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=SHZf4xdvFgUAX8s-Sk3&oh=39764565aee4bb20d34f65b74851a9a0&oe=5F3BA354'},

]

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    }
}));

const GalleryList = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={6} className={classes.root}>
            {gallery.map(image => (
                <Grid item xs key={image.id}>
                    <GalleryListItem img={image.imgUrl}/>
                </Grid>
            ))}
        </Grid>
    )
};

export default GalleryList;