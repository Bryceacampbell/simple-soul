import React from "react";
import Banner from "../Banner/Banner";
import { Grid, Container, Typography } from "@material-ui/core";
import ScheduleModal from '../ScheduleModal/ScheduleModal';

const HomeBanner = () => {
  return (
    <Banner>
      <Container>
        {/* <Grid display='flex' direction='column' alignItems='center' justify='center' style={{ height: '100%' }} container>
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
            Schedule an appointment today by clicking the "Schedule Now" button!
          </Typography>
          <Grid item xs={12}>
            <ScheduleModal />
          </Grid>
        </Grid> */}

        <Grid container display='flex' direction='column' alignItems='center' justify='center' style={{ backgroundColor: "transparent", color: "#fff", textAlign: "center" }}>
          <Grid item xs={12} md={6}>
            <Typography>Visit <a href="https://www.cellcore.com/pages/register-customer" target="_blank" rel="noreferrer" style={{ color: "#000", fontWeight: 'bold' }}>cellcore.com</a> and use our code <strong>EIHN0LSF</strong></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>&</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography><a href="https://go.globalhealingcenter.com/c/2733531/528221/5534" target="_blank" rel="noreferrer" style={{ color: "#000" }}>Get 10% off Oxy-Powder</a></Typography>
          </Grid>
          <Grid item xs={12}>
            <ScheduleModal />
          </Grid>
        </Grid>
      </Container>
    </Banner>
  );
};

export default HomeBanner;
