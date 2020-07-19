import React from 'react';
import { Grid, Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import PieChart from './components/PieChart';
import piechart from '../../images/piechart.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20
    },
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

const Process = () => {
    const classes = useStyles();

    return (
        <Container style={{ marginBottom: 40 }}>
            <Grid container spacing={6} className={classes.root}>
                <Grid item xs={12} md={6}>
                    <br></br>
                    <Typography
                        variant='h4'
                        gutterBottom
                        style={{
                            color: '#00707C',
                            borderBottom: '1px solid #00707C',
                            maxWidth: '40%'
                        }}>Our Process</Typography>
                    <Typography variant='h6' gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia.
                </Typography>
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <img
                            src={piechart}
                            alt='Epigenetic Indicators Chart'
                            width='350'
                        />
                    </div>
                </Grid>
            </Grid>
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
        </Container>
    )
};

export default Process;