import React from "react";
import Banner from "../Banner/Banner";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
const HomeBanner = () => {
  return (
    <Banner>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Box mt={3}>
              <Typography
                id="process"
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
