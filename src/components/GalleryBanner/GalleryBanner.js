import { Container } from "@material-ui/core";
import React from "react";
import Banner from "../Banner/Banner";
import Wave from "../SvgIcons/Wave/Wave";
const GalleryBanner = () => {
  return (
    <Banner id="contact">
      <Container>
        <Wave width="100%" height="125" color="#fff" />
      </Container>
    </Banner>
  );
};

export default GalleryBanner;
