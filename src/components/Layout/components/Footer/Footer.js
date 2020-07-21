import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Favicon from "../../../../images/icons/favicon.png";
const Footer = () => {
  return (
    <div style={{backgroundColor: 'var(--simple-blue)'}}>
      <Container>
        <Grid justify="center" container>
          <Grid style={{display: 'contents'}} item>
            <img style={{margin:'.5em auto .5em auto'}} height="35px" src={Favicon} alt="Simple Soul Logo" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
