import React from 'react';
import { Grid } from '@material-ui/core';
import TestimonialListItem from './TestimonialListItem';
import { makeStyles } from '@material-ui/core/styles';

const reviews = [
    {
        id: 1,
        name: 'John Smith',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        name: 'John Smith',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        name: 'John Smith',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    }
}));

const List = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={6} className={classes.root}>
            {reviews.map(review => (
                <Grid item xs key={review.id}>
                    <TestimonialListItem name={review.name} review={review.review} />
                </Grid>
            ))}
        </Grid>
    )
};

export default List;