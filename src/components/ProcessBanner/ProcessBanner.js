import React from "react";
import Banner from "../Banner/Banner";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HusbandWifeIcon from "../SvgIcons/HusbandWife/HusbandWifeIcon";
import FamilyIcon from "../SvgIcons/HusbandWife/HusbandWifeIcon";
const ProcessBanner = () => {
  const useStyles = makeStyles({
    headers: {
      color: "white",
    },

  });
  const classes = useStyles();
  return (
    <Banner id="testimonials">
  
    </Banner>
  );
};

export default ProcessBanner;
