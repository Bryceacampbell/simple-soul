import React from "react";
import { Grid, TextField } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

const ContactForm = () => {
  const useStyles = makeStyles({
    root: {
      width: '100px'
    }
  })
  const classes = useStyles;
  return (
    <form name="contact-form">
      <Grid item>
        <TextField classes={{root:classes.root}} size='medium'  name="Name" label="Name"></TextField>
      </Grid>
      <Grid item>
        <TextField size='medium' name="Phone" label="Phone"></TextField>
      </Grid>
      <Grid item>
        <TextField size='medium' name="Message" label="Message..." multiline></TextField>
      </Grid>
    </form>
  );
};

export default ContactForm;
