import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

const ContactForm = () => {
  const useStyles = makeStyles((theme) => ({
    responsive: {
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-start'
      }
    }
  }))
  const styles = useStyles();
  const inputs = [
    'Name',
    'Phone',
    'Email',
    'Message'
  ]

  return (
    <Grid item>
      <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Grid justify='center' className={styles.responsive} container>
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
      </form>
    </Grid>
  );
};

export default ContactForm;
