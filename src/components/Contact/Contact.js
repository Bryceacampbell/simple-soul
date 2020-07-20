import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ContactForm from "./components/ContactForm/ContactForm";
import InfoSection from "./components/InfoSection/InfoSection";
const Contact = () => {
  return (
    <Container>
      <Grid style={{padding: '20px'}} container spacing={2}>
        <Grid item sm={6}>
          <Typography
            style={{
              color: "#00707C",
            }}
            variant="h4"
          >
            Get in touch.
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
