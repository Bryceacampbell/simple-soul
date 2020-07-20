import React from 'react';
import { Grid } from '@material-ui/core';
import TestimonialListItem from './TestimonialListItem';
import { makeStyles } from '@material-ui/core/styles';

const reviews = [
    {
        id: 1,
        name: 'Melanie',
        review: 'Hair analysis test was worth the money and time. Reason is I discovered depletion in minerals affecting my sleep patterns. Cody has issues with his stomach and it took Heather advising him to eat on a regular basis  and supplementing with vitamins and minerals. My boys are active and I felt it important for them to get tested to Achieve their optimal performance on the football field. Case found he wasn’t taking sufficient amount of Amino acids for proper muscle recovery.Cutter discovered a parasite affecting weight gain. Sy struggling in absorbing nutrients from food intake causing stomach issues.  Momma Hatch became informed in the direction her family needed to get healthy. Sure grateful for Heathers knowledge in the human body and how we can all feel better naturally.'
    },
    {
        id: 2,
        name: 'Arian',
        review: 'I was not sure what to expect from a hair analysis and had never met Heather. From the moment my kids and I arrived she made us feel comfortable and excited to find out more about our personal health. I had some specific questions and concerns and Heather answered them and helped me and my kids understand but not feel overwhelmed. I was grateful for Heather’s knowledge and the great way she explained things to me and my kids. We came away with a much clearer understanding of our own unique health and a plan for what to work on to feel better and have stronger immune systems. I love that the analysis provides ideas and ways to help fix the areas that are lacking with real food and practical things rather than synthetic drugs or tons of supplements. The analysis and explanations from Heather helped me to have a clearer vision of what I can do for my own health and for my family too. Excited to see the changes take affect for my whole family!'
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