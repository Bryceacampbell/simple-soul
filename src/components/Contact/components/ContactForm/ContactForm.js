import React from "react";
import { Grid, Hidden, TextField, Button } from "@material-ui/core";
const ContactForm = () => {
  const inputs = [
    'Name',
    'Phone',
    'Message'
  ]
  return (
    <Grid item>
      <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
        <input type="hidden" name="bot-field" />
        <input type='hidden' name='form-name' value='contact' />
        <Hidden smUp>
          <Grid justify='center' container>
            <div style={{ display: 'contents' }}>

              {inputs.map(li => (
                <TextField

                  style={{ width: "80%", marginBottom: "1.5em" }}
                  size="medium"
                  name={li}
                  label={li}
                  key={li}
                  mutliline={li === 'Message'}
                ></TextField>
              ))}
              <div style={{ width: "80%" }}>
                <Button type='submit'
                  style={{
                    float: "right",
                    backgroundColor: "var(--simple-blue)",
                    color: "#fff",
                  }}
                >
                  Send
            </Button>
              </div>
            </div>
          </Grid>
        </Hidden>
        <Hidden only='xs'>
          <div style={{ display: 'contents' }}>

            {inputs.map(li => (
              <TextField

                style={{ width: "80%", marginBottom: "1.5em" }}
                size="medium"
                name={li}
                label={li}
                key={li}
                mutliline={li === 'Message'}
              ></TextField>
            ))}
            <div style={{ width: "80%" }}>
              <Button type='submit'
                style={{
                  float: "right",
                  backgroundColor: "var(--simple-blue)",
                  color: "#fff",
                }}
              >
                Send
            </Button>
            </div>
          </div>
        </Hidden>
      </form>
    </Grid>
  );
};

export default ContactForm;
