import React from "react";

import { Grid } from "@material-ui/core";
import heroImg from "../../../images/header-w-bottom-text.jpg";

const Hero = () => {
  return (
    <div id="home">
      <Grid container style={{ marginBottom: 40 }}>
        <Grid item xs={12}>
          <img src={heroImg} alt="Simple Soul" width="100%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
