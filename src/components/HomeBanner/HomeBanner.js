import React from "react";
import Banner from "../Banner/Banner";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
const HomeBanner = () => {
  return (
    <Banner id="process">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box mt={3}>
              <Typography
                style={{ color: "white" }}
                align="center"
                variant="h6"
              >
                Want to learn more?
              </Typography>
              <Typography
                style={{ color: "white" }}
                align="center"
                variant="h6"
                gutterBottom
              >
                Schedule an appointment today!
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button
                  style={{ color: "white", borderColor: "#ccc" }}
                  variant="outlined"
                >
                  Schedule Appointment
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
