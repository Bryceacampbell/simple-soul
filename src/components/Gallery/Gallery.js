import React from 'react';
import { Grid, Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GalleryList from './components/GalleryList';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    },
}));

const Gallery = () => {
    const classes = useStyles();

    return (
        <Container style={{ marginBottom: 40 }}>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={2}>
                    <Button variant='text' startIcon={<InstagramIcon/>} size='large'> @simplesoulaz</Button>
                </Grid>
                
                    <GalleryList />
                
            </Grid>
        </Container>
    )
};

export default Gallery;