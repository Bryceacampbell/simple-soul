import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ContactForm = () => {
  const useStyles = makeStyles({
    root: {
      width: "100px",
    },
  });
  const classes = useStyles;
  return (
    <form name="contact-form">
      <Grid container alignItems='center' spacing={2}>
        <Grid item>
          <TextField
            style={{ width: "400px" }}
            size="medium"
            name="Name"
            label="Name"
          ></TextField>
        </Grid>
        <Grid style={{ width: "400px" }} item>
          <TextField
            style={{ width: "400px" }}
            size="medium"
            name="Phone"
            label="Phone"
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "400px" }}
            size="medium"
            name="Message"
            label="Message..."
            multiline
            rows={6}
          ></TextField>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
