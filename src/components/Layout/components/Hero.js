import React from "react";

import { Grid } from "@material-ui/core";
import heroImg from "../../../images/header-w-bottom-text.jpg";

const Hero = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <img src={heroImg} alt="Simple Soul" width="100%" />
        </Grid>
        <Grid item xs={12} style={{ height: 100, position: 'relative', top: -50 }}>
            <div id='home'></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
