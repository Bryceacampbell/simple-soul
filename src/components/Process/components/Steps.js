import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    roundedDiv: {
        borderRadius: '50%',
        background: '#00707C',
        width: 125,
        height: 125,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10
    },
}));

const steps = [
    { id: 1, name: 'Collect' },
    { id: 2, name: 'Analyze' },
    { id: 3, name: 'Optimize Wellness' },
    { id: 4, name: 'Results' },
    { id: 5, name: '90 Day Review' },
];

const Steps = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={6} direction='row' style={{ textAlign: 'center' }}>
            {steps.map((step => (
                <Grid item xs={4} md key={step.id}>
                    <div className={classes.roundedDiv} ></div>
                    <Typography variant='h5'>{step.name}</Typography>
                </Grid>
            )))}
        </Grid>
    )
};

export default Steps;