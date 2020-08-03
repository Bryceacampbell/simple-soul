import React from "react";
import Banner from "../Banner/Banner";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";

const HomeBanner = () => {
  return (
    <Banner id="process">
      <Container>
        <Grid display='flex' direction='column' alignItems='center' justify='center' style={{ height: '100%' }} container>
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
            <a target='_blank' href='https://square.site/book/2TM3B1F3R9Z9C/simple-soul-gilbert-az' style={{textDecoration: 'none'}}>
              <Button
                style={{ color: "white", borderColor: "#ccc" }}
                variant="outlined"
              >
                Schedule Appointment
                </Button>
            </a>
          </Box>
        </Grid>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
