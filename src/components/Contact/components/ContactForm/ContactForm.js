import React from "react";
import { Grid, TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ContactForm = () => {
  const useStyles = makeStyles({
    root: {
      width: "100px",
    },
  });
  const classes = useStyles;
  return (
    <Grid item>
      <form name="contact-form">
          <TextField
            style={{ width: "80%", marginBottom: '1.5em' }}
            size="medium"
            name="Name"
            label="Name"
          ></TextField>
          <TextField
          
            style={{ width: "80%", marginBottom: '1.5em' }}
            size="medium"
            name="Phone"
            label="Phone"
          ></TextField>
          <TextField
          
            style={{ width: "80%", marginBottom: '1.5em' }}
            size="medium"
            name="Message"
            label="Message..."
            multiline
            rows={6}
          ></TextField>
          <div style={{width: "80%"}}>
            <Button
              style={{
                float: "right",
                backgroundColor: "var(--simple-blue)",
                color: "#fff",
              }}
            >
              Send
            </Button>
          </div>
    </form>
      </Grid>
  );
};

export default ContactForm;
