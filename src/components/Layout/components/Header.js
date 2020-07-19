import React from "react";

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#00707C',
        height: 50,
        width: '100%'
    }
}));


const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </div>
    )
};

export default Header;
