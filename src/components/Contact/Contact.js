import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ContactForm from "./components/ContactForm/ContactForm";
import InfoSection from "./components/InfoSection/InfoSection";
const Contact = () => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={6}>
          <Typography
            style={{
              color: "#00707C",
            }}
            variant="h4"
          >
            Contact us
          </Typography>
          <Typography
            style={{
              color: "#00707C",
            }}
            variant="h4"
          >
            today!
          </Typography>
          <ContactForm />
        </Grid>
        <Grid item sm={6}>
          <InfoSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
