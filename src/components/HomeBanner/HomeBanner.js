import React from "react";
import Banner from "../Banner/Banner";
import { Grid, Container, Typography } from "@material-ui/core";
import ScheduleModal from '../ScheduleModal/ScheduleModal';

const HomeBanner = () => {
  return (
    <Banner>
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
          <Grid item xs={12}>
            <ScheduleModal />
          </Grid>
        </Grid>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
