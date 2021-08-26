import React from "react";
import { Container, Grid, Typography, Hidden } from "@material-ui/core";
import ContactForm from "./components/ContactForm/ContactForm";
import InfoSection from "./components/InfoSection/InfoSection";
const Contact = () => {
  return (
    <Container style={{ marginBottom: 80 }}>
      <Grid style={{ padding: "20px" }} container spacing={2}>
        <Grid item sm={6}>
          <Grid container justifyContent="center">
            <Hidden smUp>
              <Typography
                style={{
                  color: "var(--simple-blue)",
                  marginBottom: 20,
                }}
                variant="h4"
              >
                Get in touch.
              </Typography>
            </Hidden>
          </Grid>
          <Hidden only="xs">
            <Typography
              style={{
                color: "var(--simple-blue)",
                marginBottom: 20,
              }}
              variant="h4"
            >
              Get in touch.
            </Typography>
          </Hidden>
          <ContactForm />
        </Grid>
        <Grid item sm={6}>
          <Grid container justifyContent="center">
            <Hidden smUp>
              <Typography
                style={{
                  color: "var(--simple-blue)",
                  marginBottom: 20,
                }}
                variant="h4"
              >
                Discount Information
              </Typography>
            </Hidden>
          </Grid>
          <Hidden only="xs">
            <Typography
              style={{
                color: "var(--simple-blue)",
                marginBottom: 20,
              }}
              variant="h4"
            >
              Discount Information
            </Typography>
          </Hidden>
          <InfoSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
