import React from 'react';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 150,
        width: '100%',
        background: '#00707C',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Container>
                    <Grid container spacing={10} alignItems='center'>
                        <Grid item xs>
                            <Typography variant='h6'>
                                Want to learn more? 
                                Schedule an appointment today!
                            </Typography>
                            <Button>Schedule Appointment</Button>
                        </Grid>
                        <Grid item xs>
                        <Typography variant='h6'>
                                Want to learn more? 
                                Schedule an appointment today!
                            </Typography>
                            <Button>Schedule Appointment</Button>
                        </Grid>
                    </Grid>
                </Container>
        </div>
    )
};

export default Home;