import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import FormInputs from '../FormInputs'
const ContactForm = () => {

  return (
    <Grid item>
      <form name="contact-form">
        <Hidden smUp>
        <Grid justify='center' container>
          <FormInputs />
        </Grid>
        </Hidden>
        <Hidden only='xs'>
          <FormInputs />
        </Hidden>
      </form>
    </Grid>
  );
};

export default ContactForm;
