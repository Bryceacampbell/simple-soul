import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hair from '../../SvgIcons/Hair/Hair';
import NinetyDay from '../../SvgIcons/NinetyDay/NinetyDay';
import PieChartIcon from '@material-ui/icons/PieChart';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
    roundedDiv: {
        borderRadius: '50%',
        background: '#00707C',
        width: 125,
        height: 125,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
        alignItems: 'center'
    },
}));

const steps = [
    { id: 1, name: 'Collect' , icon: <Hair color='#fff' width='50%'/>},
    { id: 2, name: 'Analyze' },
    { id: 3, name: 'Results', icon: <PieChartIcon /> },
    { id: 4, name: 'Optimize Wellness', icon: <AssignmentIcon /> },
    { id: 5, name: '90 Day Review', icon: <NinetyDay color='#fff' width='50%'/> },
];

const Steps = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={6} direction='row' style={{ textAlign: 'center' }}>
            {steps.map((step => (
                <Grid item xs={4} md key={step.id}>
                    <div className={classes.roundedDiv} >
                        {step.icon}
                    </div>
                    <Typography variant='h5'>{step.name}</Typography>
                </Grid>
            )))}
        </Grid>
    )
};

export default Steps;