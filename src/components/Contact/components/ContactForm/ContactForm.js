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
    <form name="contact-form">
      <Grid item>
        <Box display="inline-flex" flexDirection="column">
          <TextField
            style={{ width: "400px", marginBottom: '1.5em' }}
            size="medium"
            name="Name"
            label="Name"
          ></TextField>
          <TextField
          
            style={{ width: "400px", marginBottom: '1.5em' }}
            size="medium"
            name="Phone"
            label="Phone"
          ></TextField>
          <TextField
          
            style={{ width: "400px", marginBottom: '1.5em' }}
            size="medium"
            name="Message"
            label="Message..."
            multiline
            rows={6}
          ></TextField>
          <div>
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
        </Box>
      </Grid>
    </form>
  );
};

export default ContactForm;
