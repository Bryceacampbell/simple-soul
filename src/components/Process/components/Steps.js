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

const Steps = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={6} direction='row' style={{ textAlign: 'center' }}>
            <Grid item xs  >
                <div className={classes.roundedDiv} ></div>
                <Typography variant='h5'>Analyze</Typography>
            </Grid>
            <Grid item xs >
                <div className={classes.roundedDiv}></div>
                <Typography variant='h5'>Collect</Typography>
            </Grid>
            <Grid item xs >
                <div className={classes.roundedDiv}></div>
                <Typography variant='h5'>Optimize Wellness</Typography>
            </Grid>
            <Grid item xs >
                <div className={classes.roundedDiv}></div>
                <Typography variant='h5'>Results</Typography>
            </Grid>
            <Grid item xs >
                <div className={classes.roundedDiv}></div>
                <Typography variant='h5'>90 day review</Typography>
            </Grid>
        </Grid>
    )
};

export default Steps;